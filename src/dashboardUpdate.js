import {store} from './redux/store';
import {keysActive} from './setup/attachEventHandlers';

import {changeThrust} from './redux/ship/actions';



const thrustUpdate = (thrustInfo) => {
    thrustInfo.innerHTML = store.getState().thrust/*  ? store.state.thrust + '' : '' */;
}

let count = 0;


const dashboardUpdate = (dashboard) => {
    
    count ++;
    count = count % 120;

    if (count % 2 === 0) {
        if (keysActive['16']===true) changeThrust(1);
        else changeThrust(-1);
    }

    thrustUpdate(dashboard.thrustInfo);
};

export {dashboardUpdate};
