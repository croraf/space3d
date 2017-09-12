import {store} from '../store';

const changeThrust = (direction) => {
    console.log('thrust');
    store.dispatch({type: 'CHANGE_THRUST', direction});
}

const stopThrust = () => {
    store.dispatch({type: 'STOP_THRUST'});
}

const fire = (state) => {
    store.dispatch({type: 'FIRING', state});
}

const fireRocket = (state) => {
    store.dispatch({type: 'FIRING_ROCKET', state});
}

const enterPipeline = (pipeline) => {
    if (store.getState().pipeline === null) {
        store.dispatch({type: 'ENTER_PIPELINE', pipeline});
    }
}

const exitPipeline = () => {
    store.dispatch({type: 'EXIT_PIPELINE'});
}

export {changeThrust, stopThrust, enterPipeline, exitPipeline, fire};
