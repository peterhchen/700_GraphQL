// const db = require('./db')
const Query = {
   //resolver function for greeting
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   
   sayHello:(root,args,context,info) => {
      return `Hi ${args.name} GraphQL server says Hello to you!!`
   }
}

module.exports = {Query}