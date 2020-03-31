//used if the action creator returns a promise
const promiseMiddleware = store => next => action => {
    if (action instanceof Promise) {
        return action.then(actionObj => next(actionObj))
    }
    return next(action);
}

export default promiseMiddleware;