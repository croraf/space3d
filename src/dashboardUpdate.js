import {store} from './redux/store';
import {keysActive} from './setup/attachEventHandlers';


import {stopThrust, changeThrust} from './redux/ship/actions';

const thrustUpdate = (thrustInfo, loading) => {
    thrustInfo.innerHTML = loading + '%';
}

let count = 0;

let loadingOld = 0;

const dashboardUpdate = (dashboard) => {
    
    count ++;
    count = count % 120;

    if (count % 2 === 0 && !store.getState().thrust.on && store.getState().pipeline === null) {
        if (keysActive['16']===true) changeThrust(1);
        else if (store.getState().thrust.loading !== 0) changeThrust(-1);
    } else if (store.getState().thrust.on) {
        if (keysActive['27']===true) stopThrust();  
    }

    const loadingNew = store.getState().thrust.loading;
    if (loadingOld !== loadingNew) {
        loadingOld = loadingNew;
        thrustUpdate(dashboard.thrustInfo, loadingNew);
    }
};

export {dashboardUpdate};
