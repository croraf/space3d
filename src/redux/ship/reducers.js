

const thrustReducer = (state={loading: 0, on: false}, action) => {
    switch (action.type) {
        case 'CHANGE_THRUST':
            if (action.direction > 0 && state.loading + 1 === 100) return {loading: 100, on: true};
            else return {loading: action.direction > 0 ? state.loading + 1 : state.loading - 1, on: false};
        case 'STOP_THRUST':
            return {loading: 0, on: false};
        default:
            return state;
            break;
    }
}

const firingReducer = (state=false, action) => {
    switch (action.type) {
        case 'FIRING':
            return action.state;
        default:
            return state;
            break;
    }
}

const pipelineReducer = (state=null, action) => {
    switch (action.type) {
        case 'ENTER_PIPELINE':
            console.log('ENTER_PIPELINE:', action.pipeline);
            return action.pipeline;
        case 'EXIT_PIPELINE':
            return null;
        default:
            return state;
            break;
    }
}

export {thrustReducer, firingReducer, pipelineReducer};
