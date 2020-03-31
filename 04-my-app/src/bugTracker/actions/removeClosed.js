export function removeClosed(bugs) {
    /* We donot have access to the currentState in the actionCreators, so we pass it from the UI - bad practice */
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: bugsToRemove };
    return action;
}