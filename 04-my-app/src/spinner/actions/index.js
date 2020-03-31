export var spinnerActionCreators = {
    up(delta) {
        var up_action = { type: 'UP', payload: delta };
        return up_action;
    },
    down(delta) {
        var down_action = { type: 'DOWN', payload: delta };
        return down_action;
    }
}