
import {Vector3} from 'three';

import {keysActive, viewTarget, mouseActive} from './setup/attachEventHandlers';

import {engine} from './redux/ship/engine';

const speedBase = 0.07;
const rotationSpeedBase = 1/180 * Math.PI;

const positionUpdateCruise = (camera) => {

    Object.keys(keysActive).forEach(keyCode => {

        switch (keyCode) {
            case '65': /* a */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), - speedBase);
                break;
            case '68': /* d */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), speedBase);
                break;
            case '87': /* w */
                camera.translateOnAxis(new Vector3(0,0,-1), speedBase*1.2);
                break;
            case '83':/* s */
                camera.translateOnAxis(new Vector3(0,0,-1), - speedBase*0.5);
                break;
            case '32':
                // SPACE, restart
                camera.position.set(0, 0, 15);
                camera.lookAt({x: 0, y: 0, z: 0}); 
                break;
            default:
                
                console.log('----------------------------key pressed', keyCode, typeof keyCode);
                break;
        }

        
        /*console.log('position:', camera.position);
        console.log('direction:',camera.getWorldDirection()); */
    });
};

const positionUpdateThrust = (camera) => {

    const speed = speedBase * 2;
    
    camera.translateOnAxis(new Vector3(0,0,-1), speed);

    Object.keys(keysActive).forEach(keyCode => {

        switch (keyCode) {
            case '65': /* a */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), - speedBase);
                break;
            case '68': /* d */
                camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), speedBase);
                break;
            case '87': /* w */
                break;
            case '83':/* s */
                break;
            default:
                
                console.log('----------------------------key pressed', keyCode, typeof keyCode);
                break;
        }
    });
}

const positionUpdatePipeline = (camera) => {

    camera.translateOnAxis(new Vector3(0,0,-1), speedBase*4);
    camera.lookAt(engine.pipeline.children[1].getWorldPosition());

}

const viewTargetUpdate = (camera) => {

    if (viewTarget.x > 0.05 || viewTarget.x < -0.05){

        let rotationSpeedActual = 0;
        if (viewTarget.x > 1) rotationSpeedActual = 0 /* -rotationSpeed */;
        else if (viewTarget.x < -1) rotationSpeedActual = 0 /* rotationSpeed */;
        else rotationSpeedActual = - rotationSpeedBase * viewTarget.x;

        camera.rotateY(rotationSpeedActual);
    }
    
}



let globalCounter = 0;

const cameraUpdate = (camera) => {

    globalCounter++;
    globalCounter = globalCounter % 120;


    if (engine.pipeline) {
        positionUpdatePipeline(camera);
    } else if (engine.cruise.on) {
        positionUpdateThrust(camera);
        viewTargetUpdate(camera);
    } else {
        positionUpdateCruise(camera);
        viewTargetUpdate(camera);
    }
    
};

export {cameraUpdate};
