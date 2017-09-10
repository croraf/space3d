

const thrustReducer = (state=0, action) => {
    switch (action.type) {
        case 'CHANGE_THRUST':
            return action.direction > 0 ? (state < 100 ? state+1 : state) : (state > 0 ? state-1 : state);
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

export {thrustReducer, firingReducer};
