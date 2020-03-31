import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';

import appStore from './store';

import { BugTracker } from './bugTracker';
import * as bugActionCreators from './bugTracker/actions';

import { Spinner } from './spinner';
import { spinnerActionCreators } from './spinner/actions';

window['appStore'] = appStore;

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp(){
  const appState = appStore.getState()
  const bugs = appState.bugsData,
        value = appState.spinnerData;

  ReactDOM.render(
      <div>
        <h1>My App</h1>
        <Spinner value={value} {...spinnerActionDispatchers}/>
        <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </div>
    ,document.getElementById('root')
  );
}
renderApp();
appStore.subscribe(renderApp); 






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