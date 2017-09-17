
import {keysActive} from './setup/attachEventHandlers';

import {engine, stopThrust, changeThrust} from './redux/ship/engine';
import {weapons} from './redux/ship/weapons';

import {dashboard} from './dashboard';
import {clock} from './setup/webGLsetup';

import {sceneObjects} from './redux/scene/sceneObjects';

import {camera} from './setup/webGLsetup';


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
    
};
 
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
};

const updateTime = () => {

    dashboard.time.innerHTML = clock.getElapsedTime().toFixed(0) + 's';
};

const dashboardUpdate = (dashboard) => {
    
    count ++;
    count = count % 120;

    updateThrustInfo(dashboard);

    if (count % 40 === 0) updateRocketCooldown(dashboard.rocketCooldown);

    if (count % 60 === 0) updateTime();

    if (count % 5 === 0) setSelectedElement();
};

const setSelectedElement = () => {

    const currentSelection = sceneObjects.selected;

    if (currentSelection) {

        /* console.log(currentSelection); */

        let name = currentSelection.name;
        if (!name) {
            name = currentSelection.parent.name;
            if (!name){
                name = currentSelection.parent.parent.name;
            }
        }
        dashboard.selectedItem.innerHTML = name + ', ' + (currentSelection.position.distanceTo(camera.position)*10).toFixed(1) + 'm';

        if (name.startsWith('target')) {
            dashboard.selectedItem.innerHTML = dashboard.selectedItem.innerHTML + ', ' + 'health: ' + currentSelection.health + '%';
        }
    } else {
        dashboard.selectedItem.innerHTML = '';
    }
};

const setWonScreen = () => {

    dashboard.winScreen.innerHTML = 'Game won!<br />' + clock.getElapsedTime().toFixed(1) + ' seconds';
};

export {dashboardUpdate, setSelectedElement, setWonScreen};

