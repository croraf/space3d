
import {camera, renderer, container} from './setup/webGLsetup';

import {scene} from './setup/createScene';



import {Vector3} from 'three';

import {attachHandlers} from './setup/attachEventHandlers';


import {getPipeline} from './objects/complexObjects';


/* const scene = createScene(); */

import {setupScene} from './setupScene';

setupScene();

const pipeline1 = getPipeline(new Vector3(20, 0, 0), new Vector3(-30, 0, -300));
const pipeline2 = getPipeline(new Vector3(-40, 0, -170), new Vector3(-40, 0, 20));


scene.add( pipeline1 );
scene.add( pipeline2 );

camera.position.z = 40;
camera.position.y = 0;
camera.lookAt({x: 0, y: 0, z: 0});

scene.add(camera);

attachHandlers();


import {dashboard} from './dashboard';

import {cameraUpdate} from './cameraUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';  
import {firingUpdate} from './firingUpdate';


/* const dashboard = createDashboard(container); */

function animate() {
    requestAnimationFrame( animate );

    checkPipelines(camera, [pipeline1, pipeline2]); 
    cameraUpdate(camera); 
    dashboardUpdate(dashboard); 
    /* logicUpdate(); */ 
    firingUpdate(scene, camera);

    scene.getObjectByName('target').translateOnAxis(new Vector3(1, 0, 0), 0.01);
 
    renderer.render( scene, camera );
}


animate(); 
