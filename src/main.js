
import {renderer} from './setup/webGLsetup';
import {camera, setupCamera} from './model/camera';

import {clock, increaseGlobalCounter, globalCounter} from './model/clock';

import {scene} from './model/scene/scene';


import {setupHandlers} from './setup/attachEventHandlers';
import {setupScene} from './setup/setupScene';
import {setupAudio} from './setup/setupAudio';
import {dashboard, setupDashboard} from './model/dashboard/dashboard';


import {playerUpdate} from './playerUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';  
import {firingUpdate} from './firingUpdate';
import {sceneObjectsUpdate} from './sceneObjectsUpdate';
import {updateMenu} from './menu/menu';
import {checkIfInBox, setupHelpersForCheckIfInBox} from './utils/checkCollision';

function init() {
    
    clock.start();

    setupCamera(scene);
    setupScene();
    setupDashboard();
    setupHandlers();
    setupAudio();
    setupHelpersForCheckIfInBox(scene.getObjectByName('box1'));

    /* const MyWorker = require("worker-loader!./webWorker.js");
    
    const worker = new MyWorker();
    worker.postMessage('Hello World!');
    worker.onmessage = (message)=>{console.log(message);}; */
}

function animate() {
    requestAnimationFrame( animate );

    /* console.log(clock.getDelta()); */
    increaseGlobalCounter();

    checkPipelines(camera, [scene.getObjectByName('pipeline1'), scene.getObjectByName('pipeline2')]); 
    playerUpdate(camera); 
    dashboardUpdate(dashboard); 
    firingUpdate(scene, camera);

    sceneObjectsUpdate();
    
    if (globalCounter % 16 === 0) {
        
        checkIfInBox(camera.getWorldPosition(), scene.getObjectByName('box1'));
        
    }

    updateMenu();

    renderer.render( scene, camera );
}

init();
animate(); 
