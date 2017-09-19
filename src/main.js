
import {camera, renderer} from './setup/webGLsetup';

import {clock, increaseGlobalCounter} from './redux/clock';

import {scene} from './setup/createScene';

import {attachHandlers} from './setup/attachEventHandlers';

import {updateMenu} from './menu/menu';

/* const scene = createScene(); */

import {setupScene} from './setupScene';

setupScene();


camera.name = 'camera';
camera.position.z = 40;
camera.position.y = 0;
camera.lookAt({x: 0, y: 0, z: 0});

scene.add(camera);
camera.nonIntersectable = true;

attachHandlers();


import {dashboard} from './dashboard';

import {cameraUpdate} from './cameraUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';  
import {firingUpdate} from './firingUpdate';

import {sceneUpdate} from './sceneUpdate';

/* const dashboard = createDashboard(container); */

import {getParticleSystem} from './objects/objectCreators';

getParticleSystem(scene);

clock.start();

function animate() {
    requestAnimationFrame( animate );

    /* console.log(clock.getDelta()); */
    increaseGlobalCounter();

    checkPipelines(camera, [scene.getObjectByName('pipeline1'), scene.getObjectByName('pipeline2')]); 
    cameraUpdate(camera); 
    dashboardUpdate(dashboard); 
    /* logicUpdate(); */ 
    firingUpdate(scene, camera);

    sceneUpdate();

    updateMenu();
    /* scene.getObjectByName('Omega').position.set(0,0,0); */
    /* if (scene.particleSystem1) {
        scene.particleSystem1.tick( 0.01 );
    } */

    renderer.render( scene, camera );
}


animate(); 
