
import {keysActive} from './setup/attachEventHandlers';

import {engine, stopThrust, changeThrust} from './redux/ship/engine';
import {weapons} from './redux/ship/weapons';

import {dashboard} from './dashboard';

let count = 0;


let loadingOld = 0;

const updateThrustInfo = (dashboard) => {

    if (count % 2 === 0 && !engine.cruise.on && engine.pipeline === null) {
        if (keysActive['16']===true) changeThrust(1);
        else if (engine.cruise.loading !== 0) changeThrust(-1);
    } else if (engine.cruise.on) {
        if (keysActive['27']===true) stopThrust();  
    }

    const loadingNew = engine.cruise.loading;
    if (loadingOld !== loadingNew) {
        loadingOld = loadingNew;
        dashboard.thrustInfo.innerHTML = loadingNew + '%';
    }
    
}
 
let cooldownOld = 0;
const updateRocketCooldown = (rocketCooldownElement) => {

    const cooldownNew = weapons.rocket.cooldown;
    if (cooldownOld !== cooldownNew) {
        cooldownOld = cooldownNew;
        rocketCooldownElement.innerHTML = cooldownNew;

        if (cooldownNew > 2)  rocketCooldownElement.style.color = 'red';
        else if (cooldownNew > 0) rocketCooldownElement.style.color = 'orange';
        else rocketCooldownElement.style.color = 'white';
    }
} 

const dashboardUpdate = (dashboard) => {
    
    count ++;
    count = count % 120;

    updateThrustInfo(dashboard);

    if (count % 40 === 0) updateRocketCooldown(dashboard.rocketCooldown);  
};

const setSelectedElement = (intersects) => {

    if (intersects.length > 0) {
        dashboard.selectedItem.innerHTML = intersects[0].object.name + ', ' + (intersects[0].distance*10).toFixed(1) + 'm';
    } else {
        dashboard.selectedItem.innerHTML = '';
    }

}

export {dashboardUpdate, setSelectedElement};
