import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

  ReactDOM.render(
      <Provider store={appStore}>
        <div>
          <h1>My App</h1>
          <Spinner/>
          <BugTracker/>
        </div>
      </Provider>
    ,document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* ES6 modules */
//import * as calculator from './calc'
//import { add } from './calc';

//console.log(add(10,20))

//importing the default exported object
//import calculator from './calc';
//console.log(calculator.add(100,200));