
import {camera, renderer, container} from './setup/webGLsetup';

import {scene} from './setup/createScene';



import {Vector3} from 'three';

import {attachHandlers} from './setup/attachEventHandlers';


import {getPipeline} from './objects/complexObjects';


/* const scene = createScene(); */

import {setupScene} from './setupScene';

setupScene();

const pipeline1 = getPipeline(new Vector3(20, 0, 0), new Vector3(-30, 0, -400));
pipeline1.children[0].name = 'pipeline1' + pipeline1.children[0].name;
pipeline1.children[1].name = 'pipeline1' + pipeline1.children[1].name;

const pipeline2 = getPipeline(new Vector3(-40, 0, -300), new Vector3(-40, 0, 20));
pipeline2.children[0].name = 'pipeline2' + pipeline2.children[0].name;
pipeline2.children[1].name = 'pipeline2' + pipeline2.children[1].name;

scene.add( pipeline1 );
scene.add( pipeline2 );

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

function animate() {
    requestAnimationFrame( animate );

    /* console.log(clock.getDelta()); */

    checkPipelines(camera, [pipeline1, pipeline2]); 
    cameraUpdate(camera); 
    dashboardUpdate(dashboard); 
    /* logicUpdate(); */ 
    firingUpdate(scene, camera);

    sceneUpdate();

    /* if (scene.particleSystem1) {
        scene.particleSystem1.tick( 0.01 );
    } */

    renderer.render( scene, camera );
}


animate(); 
