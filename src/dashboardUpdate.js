
import {keysActive} from './setup/attachEventHandlers';

import {engine, stopThrust, changeThrust} from './redux/ship/engine';

const thrustUpdate = (thrustInfo, loading) => {
    thrustInfo.innerHTML = loading + '%';
}

let count = 0;

let loadingOld = 0;

const dashboardUpdate = (dashboard) => {
    
    count ++;
    count = count % 120;

    if (count % 2 === 0 && !engine.cruise.on && engine.pipeline === null) {
        if (keysActive['16']===true) changeThrust(1);
        else if (engine.cruise.loading !== 0) changeThrust(-1);
    } else if (engine.cruise.on) {
        if (keysActive['27']===true) stopThrust();  
    }

    const loadingNew = engine.cruise.loading;
    if (loadingOld !== loadingNew) {
        loadingOld = loadingNew;
        thrustUpdate(dashboard.thrustInfo, loadingNew);
    }
};

export {dashboardUpdate};
