//used if the action creator returns a function
const asyncMiddleware = ({ getState, dispatch }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    } else {
        next(action);
    }
}

export default asyncMiddleware;