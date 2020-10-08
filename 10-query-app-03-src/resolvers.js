const db = require('./db')
const Query = {
   //resolver function for greeting
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   
   sayHello:(root,args,context,info) => {
      return `Hi ${args.name} GraphQL server says Hello to you!!`
   },

   //resolver function for students returns list
   students:() => db.students.list(),

   //resolver function for studentById
   studentById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.get(args.id);
   }
}

const Student = {
   fullName:(root,args,context,info) => {
      return root.firstName+":"+root.lastName
   },
   college:(root) => {
      return db.colleges.get(root.collegeId);
   }
}
module.exports = {Query,Student}
