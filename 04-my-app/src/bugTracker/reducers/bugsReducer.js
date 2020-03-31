export function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newBug = action.payload;
        const newState = [...currentState, newBug];
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    }
    if (action.type === 'REPLACE_BUG') {
        const bugToReplace = action.payload;
        const newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        return newState;
    }
    if (action.type === 'REMOVE_BUGS') {
        const bugsToRemove = action.payload;
        const newState = currentState.filter(bug => !bugsToRemove.find(bugToRemove => bugToRemove.id === bug.id));
        return newState;
    }
    return currentState;
}