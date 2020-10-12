import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom'

//components
import Students from './students'
import App from './App'

function getTime() {
   var d = new Date();
   return d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
}

const routes = <HashRouter>
   <div>
      <h4>Time from react app:{getTime()}</h4>
      <header>
         <h1>  <Link to="/">Home</Link> 
         <Link to = "/students">Students</Link>  </h1>
      </header>
      <Route exact path = "/students" component = {Students}></Route>
      <Route exact path = "/" component = {App}></Route>
   </div>
</HashRouter>

ReactDOM.render(routes, document.querySelector("#root"))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
