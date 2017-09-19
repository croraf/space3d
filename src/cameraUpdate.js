
import {Vector3} from 'three';

import {keysActive, viewTarget, mouseActive} from './setup/attachEventHandlers';

import {dashboard} from './dashboard';

import {engine} from './redux/ship/engine';
import {sceneObjects} from './redux/scene/sceneObjects';
import {menu} from './redux/menu/menu';

const speedBase = 0.07;
const rotationSpeedBase = 0.8/180 * Math.PI;

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
};

const positionUpdatePipeline = (camera) => {

    camera.translateOnAxis(new Vector3(0,0,-1), speedBase*4);
    camera.lookAt(engine.pipeline.children[1].getWorldPosition());
};

const viewTargetUpdate = (camera) => {

    if (viewTarget.x > 0.05 || viewTarget.x < -0.05){

        let rotationSpeedActual = 0;
        if (viewTarget.x > 0.8) rotationSpeedActual = -rotationSpeedBase * 0.8 /* -rotationSpeed */;
        else if (viewTarget.x < -0.8) rotationSpeedActual = rotationSpeedBase * 0.8 /* rotationSpeed */;
        else rotationSpeedActual = - rotationSpeedBase * viewTarget.x;

        camera.rotateY(rotationSpeedActual);
    }
    
};

const positionUpdateAutopilot = (camera) => {
    const targetProjection = new Vector3().copy(engine.autopilot.target.position).setY(0);
    const directionFromCamera = targetProjection.sub(camera.getWorldPosition());
    const rotationalAxis = new Vector3().crossVectors(camera.getWorldDirection(), directionFromCamera);
    
    /* console.log(rotationalAxis); */

    const angle = directionFromCamera.angleTo(camera.getWorldDirection());
    /* if (globalCounter % 120 === 0) console.log(directionFromCamera, camera.getWorldDirection(),  angle.toFixed(2));*/

    if (angle > 0.5) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.6) : camera.rotateY(-rotationSpeedBase * 0.6);
    } else if (angle > 0.2) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.3) : camera.rotateY(-rotationSpeedBase * 0.3);
    } else if (angle > 0.05) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.1) : camera.rotateY(-rotationSpeedBase * 0.1);
    }
    
    /* console.log(rotationalAxis); */
    /* camera.rotateOnAxis(rotationalAxis, rotationSpeedBase); */
    /* dashboard.dummy = (angle*180/Math.PI).toFixed(1);
    console.log((angle*180/Math.PI).toFixed(1)); */ /* camera.lookAt(); */
};

const cameraUpdate = (camera) => {

    
    if (engine.pipeline) {
        positionUpdatePipeline(camera);
    } else if (engine.cruise.on) {
        positionUpdateThrust(camera);
        if (engine.autopilot.on) {
            positionUpdateAutopilot(camera);
        } else if (!menu.on) {
            viewTargetUpdate(camera);
        }
    } else {
        positionUpdateCruise(camera);
        if (engine.autopilot.on) {
            positionUpdateAutopilot(camera);
        } else if (!menu.on) {
            viewTargetUpdate(camera);
        }
    }
    
};

export {cameraUpdate};
