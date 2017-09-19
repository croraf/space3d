
import {Vector3} from 'three';

import {keysActive, viewTarget, mouseActive} from './setup/attachEventHandlers';

import {dashboard} from './dashboard';

import {engine} from './redux/ship/engine';
import {sceneObjects} from './redux/scene/sceneObjects';

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
    const rotationalAxis = new Vector3().crossVectors(camera.getWorldDirection(), sceneObjects.selected.position).y;
    const angle = camera.getWorldDirection().angleTo(sceneObjects.selected.position);
    if (angle > 0.1) {
        if (rotationalAxis > 0) {
            camera.rotateY(rotationSpeedBase * 0.8);
        } else {
            camera.rotateY(-rotationSpeedBase * 0.8);
        }
    }
    
    /* console.log(rotationalAxis); */
    /* camera.rotateOnAxis(rotationalAxis, rotationSpeedBase); */
    /* dashboard.dummy = (angle*180/Math.PI).toFixed(1);
    console.log((angle*180/Math.PI).toFixed(1)); */ /* camera.lookAt(); */
};

let globalCounter = 0;

const cameraUpdate = (camera) => {

    globalCounter++;
    globalCounter = globalCounter % 120;

    if (engine.autopilot) {
        positionUpdateAutopilot(camera);
    } 
    
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
