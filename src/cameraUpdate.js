
import {Vector3} from 'three';

import {keysActive, viewTarget, mouseActive} from './setup/attachEventHandlers';

import {beep} from './utils/sounds';

import {store} from './redux/store';

const speedBase = 0.2;
const rotationSpeedBase = 1/180 * Math.PI;

const positionUpdate = (camera) => {

    const speed = speedBase * (store.getState().thrust === 100 ? 2 : 1);

    Object.keys(keysActive).forEach(keyCode => {

        switch (keyCode) {
            case '65': /* a */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), - speed);
                break;
            case '68': /* d */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), speed);
                break;
            case '87': /* w */
                camera.translateOnAxis(new Vector3(0,0,-1), speed);
                break;
            case '83':/* s */
                camera.translateOnAxis(new Vector3(0,0,-1), -speed);
                break;
            case '32':
                // SPACE, restart
                camera.position.set(0, 0, 15);
                camera.lookAt({x: 0, y: 0, z: 0}); 
                break;
            default:
                return;
                break;
        }

        
        console.log('----------------------------key pressed', keyCode, typeof keyCode);
        /*console.log('position:', camera.position);
        console.log('direction:',camera.getWorldDirection()); */
    });
};

const viewTargetUpdate = (camera) => {

    if (viewTarget.x > 0.05 || viewTarget.x < -0.05){

        let rotationSpeedActual = 0;
        if (viewTarget.x > 1) rotationSpeedActual = 0 /* -rotationSpeed */;
        else if (viewTarget.x < -1) rotationSpeedActual = 0 /* rotationSpeed */;
        else rotationSpeedActual = - rotationSpeedBase * viewTarget.x;

        camera.rotateY(rotationSpeedActual);
    }
    
}


const shootingUpdate = () => {

    if (mouseActive.left === true) beep();
}




let globalCounter = 0;

const cameraUpdate = (camera) => {

    globalCounter++;
    globalCounter = globalCounter % 120;
    
    positionUpdate(camera);

    viewTargetUpdate(camera);
    
    if (globalCounter === 0) shootingUpdate();
};

export {cameraUpdate};
