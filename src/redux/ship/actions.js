import {store} from '../store';

const changeThrust = (direction) => {
    store.dispatch({type: 'CHANGE_THRUST', direction});
}

const fire = (state) => {
    store.dispatch({type: 'FIRING', state});
}

export {changeThrust, fire};
