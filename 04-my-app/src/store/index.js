import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bugsReducer, bugsFilterReducer } from '../bugTracker/reducers';
import { spinnerReducer } from '../spinner/reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';
import promiseMiddleware from './middlewares/promiseMiddleware';

const rootReducer = combineReducers({
   bugsData : bugsReducer,
   bugsFilterData : bugsFilterReducer,
   spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

export default appStore;