export function bugsFilterReducer(currentState = false, action){
    if (action.type === 'APPLY_BUG_FILTER')
        return action.payload;
    return currentState;
}