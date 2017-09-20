
import {renderer} from './setup/webGLsetup';
import {camera, setupCamera} from './model/camera';

import {clock, increaseGlobalCounter} from './model/clock';

import {scene} from './model/scene/scene';

import {attachHandlers} from './setup/attachEventHandlers';

import {updateMenu} from './menu/menu';

import {setupScene} from './setup/setupScene';

import {dashboard, setupDashboard} from './model/dashboard/dashboard';

import {playerUpdate} from './playerUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';  
import {firingUpdate} from './firingUpdate';

import {sceneObjectsUpdate} from './sceneObjectsUpdate';

import {getParticleSystem} from './objects/objectCreators';

import {setupAudio} from './setup/setupAudio';

function init() {
    
    clock.start();

    setupCamera(scene);
    setupScene();
    getParticleSystem(scene);

    setupDashboard();
    attachHandlers();

    setupAudio();
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

    updateMenu();

    renderer.render( scene, camera );
}

init();
animate(); 
