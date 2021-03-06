import {Vector3} from 'three';

import {engine, enterPipeline, exitPipeline} from './model/ship/engine';

import {keysActive} from './setup/attachEventHandlers';

import {getTube} from './objects/objectCreators';

const tube1 = getTube(new Vector3(0,0,0), new Vector3(0,0,-8));
tube1.nonIntersectable = true;
tube1.name = 'tube';


const checkPipelines = (camera, pipelines) => {

    if (engine.pipeline === null) {

        // check if at pipeline entrance
        pipelines.forEach((pipeline) => {
     
            if (pipeline.children[0].getWorldPosition().sub(camera.getWorldPosition()).length() < 8) {

                camera.lookAt(pipeline.children[1].getWorldPosition()); 

                const entrance = pipeline.children[0].getWorldPosition(); 
                camera.position.set(entrance.x,entrance.y,entrance.z);

                enterPipeline(pipeline);
                camera.add(tube1);
                
                /* camera.zoom = 0.1; */
            }
        });
    } else {

        const activePipeline = engine.pipeline;
        
        /* if (store.getState().pipeline && count%120 === 0) drawTube(scene, camera);  */
        // check if at pipeline exit or escape key pressed
        if (keysActive['27'] === true || activePipeline.children[1].getWorldPosition().sub(camera.getWorldPosition()).length() < 5) {
            exitPipeline();
            camera.remove(tube1);
        }
    }

};

export {checkPipelines};
