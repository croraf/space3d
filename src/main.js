
import {renderer} from './setup/webGLsetup';
import {camera, setupCamera} from './model/camera';

import {clock, increaseGlobalCounter} from './model/clock';

import {scene} from './model/scene/scene';

import {attachHandlers} from './setup/attachEventHandlers';

import {updateMenu} from './menu/menu';

import {setupScene} from './setupScene';

import {dashboard, setupDashboard} from './model/dashboard/dashboard';

import {cameraUpdate} from './cameraUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';  
import {firingUpdate} from './firingUpdate';

import {sceneUpdate} from './sceneUpdate';

import {getParticleSystem} from './objects/objectCreators';



function init() {
    
    clock.start();

    setupCamera(scene);
    setupScene();
    getParticleSystem(scene);

    setupDashboard();
    attachHandlers();
}

function animate() {
    requestAnimationFrame( animate );

    /* console.log(clock.getDelta()); */
    increaseGlobalCounter();

    checkPipelines(camera, [scene.getObjectByName('pipeline1'), scene.getObjectByName('pipeline2')]); 
    cameraUpdate(camera); 
    dashboardUpdate(dashboard); 
    firingUpdate(scene, camera);

    sceneUpdate();

    updateMenu();

    renderer.render( scene, camera );
}

init();
animate(); 
