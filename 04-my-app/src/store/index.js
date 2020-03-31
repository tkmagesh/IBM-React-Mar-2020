import { createStore, combineReducers } from 'redux';
import { bugsReducer, bugsFilterReducer } from '../bugTracker/reducers';
import { spinnerReducer } from '../spinner/reducers';

const rootReducer = combineReducers({
   bugsData : bugsReducer,
   bugsFilterData : bugsFilterReducer,
   spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer);

export default appStore;