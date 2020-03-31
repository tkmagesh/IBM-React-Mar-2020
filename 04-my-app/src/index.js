import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BugTracker } from './bugTracker';

//import * as calculator from './calc'
//import { add } from './calc';

//console.log(add(10,20))

//importing the default exported object
//import calculator from './calc';
//console.log(calculator.add(100,200));



ReactDOM.render(
    <BugTracker />
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
