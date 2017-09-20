
import {Vector3} from 'three';

import {keysActive, viewTarget, mouseActive} from './setup/attachEventHandlers';

import {dashboard} from './model/dashboard/dashboard';

import {engine} from './model/ship/engine';
import {sceneObjects} from './model/scene/sceneObjects';
import {menu} from './model/menu/menu';
import {globalCounter} from './model/clock';

const speedBase = 0.07;
const rotationSpeedBase = 0.8/180 * Math.PI;
const DELTA = 0.00001;

const speedUpdateNormal = () => {

    Object.keys(keysActive).forEach(keyCode => {

        switch (keyCode) {
            case '87': /* w */
                if (engine.speed < speedBase * 1.2) engine.speed += 0.001;
                break;
            case '83':/* s */
                if (engine.speed > -speedBase*0.5) engine.speed -= 0.001;
                break;
            default:
                if (globalCounter === 0) console.log('------------key pressed', keyCode, typeof keyCode);
                break;
        }
    });

    if ((!keysActive['87'] && !keysActive['83']) || engine.speed > speedBase * 1.2) {
        if (engine.speed > DELTA) {engine.speed -= 0.001;}
        else if (engine.speed < -DELTA) {engine.speed += 0.001;}
        
    }
};

const speedUpdateCruise = () => {

    if (engine.speed < speedBase*2){
        engine.speed += 0.001;
    }
};

const speedUpdatePipeline = () => {

    if (engine.speed < speedBase*4){
        engine.speed += 0.001;
    }
};

const directionUpdateMouse = (camera) => {

    if (viewTarget.x > 0.05 || viewTarget.x < -0.05){

        let rotationSpeedActual = 0;
        if (viewTarget.x > 0.8) rotationSpeedActual = -rotationSpeedBase * 0.8 /* -rotationSpeed */;
        else if (viewTarget.x < -0.8) rotationSpeedActual = rotationSpeedBase * 0.8 /* rotationSpeed */;
        else rotationSpeedActual = - rotationSpeedBase * viewTarget.x;

        camera.rotateY(rotationSpeedActual);
    }
};

const directionUpdateAutopilot = (camera) => {
    const targetProjection = new Vector3().copy(engine.autopilot.target.position).setY(0);
    const directionFromCamera = targetProjection.sub(camera.getWorldPosition());
    const rotationalAxis = new Vector3().crossVectors(camera.getWorldDirection(), directionFromCamera);

    const angle = directionFromCamera.angleTo(camera.getWorldDirection());
    /* if (globalCounter % 120 === 0) console.log(directionFromCamera, camera.getWorldDirection(),  angle.toFixed(2));*/

    if (angle > 0.5) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.6) : camera.rotateY(-rotationSpeedBase * 0.6);
    } else if (angle > 0.2) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.3) : camera.rotateY(-rotationSpeedBase * 0.3);
    } else if (angle > 0.05) {
        rotationalAxis.y > 0 ? camera.rotateY(rotationSpeedBase * 0.1) : camera.rotateY(-rotationSpeedBase * 0.1);
    }

};

const moveForward = (camera) => {

    camera.translateOnAxis(new Vector3(0,0,-1), engine.speed);
};

const moveSideways = (camera) => {

    if (!engine.pipeline) {
        Object.keys(keysActive).forEach(keyCode => {
            
            switch (keyCode) {
                case '65': /* a */
                    camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), - speedBase);
                    break;
                case '68': /* d */
                    camera.translateOnAxis(new Vector3(0,0,-1).cross(new Vector3(0,1,0)), speedBase);
                    break;
                default:
                    break;
            }
        });
    }
};

const playerUpdate = (camera) => {

    moveForward(camera);
    moveSideways(camera);

    if (engine.pipeline) {
        
        camera.lookAt(engine.pipeline.children[1].getWorldPosition());
        speedUpdatePipeline();
    } else {

        if (engine.autopilot.on) {
            directionUpdateAutopilot(camera);
        } else if (!menu.on) {
            directionUpdateMouse(camera);
        }

        if (engine.cruise.on) {
            speedUpdateCruise();
        } else {
            speedUpdateNormal();
        }
    }
    
};

export {playerUpdate};
