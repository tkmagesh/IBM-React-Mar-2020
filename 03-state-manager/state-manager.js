var StateManager = (function(){
    var _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(fn){
        if (typeof fn === 'function')
            _subscribers.push(fn);
    }

    function emitChange(){
        _subscribers.forEach(subscriber => subscriber());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        emitChange()
    }

    function createStore(reducer){
        _reducer = reducer;
        var store = { getState, subscribe, dispatch };
        return store;
    }
    
    return { createStore };
})();