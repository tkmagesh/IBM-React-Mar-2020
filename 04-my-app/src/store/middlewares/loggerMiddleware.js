/* const loggerMiddleware = function(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('BEFORE ACTION');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('AFTER ACTION');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
} */

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('BEFORE ACTION');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('AFTER ACTION');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
};

export default loggerMiddleware;