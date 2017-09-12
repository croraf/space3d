
import {camera, renderer, container} from './setup/webGLsetup';

import {createScene} from './setup/createScene';

import './redux/store';

import {getCube, getSphere, getTube} from './objects/objectCreators';
import {Vector3} from 'three';

import {attachKeysHandlers, attachMouseHandlers} from './setup/attachEventHandlers';


import {getPipeline} from './objects/complexObjects';

attachKeysHandlers(camera);
attachMouseHandlers();

const scene = createScene();

const cube1 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:10});
const cube2 = getCube({x:1, y:1, z:1}, {x:10, y:0, z:20});
const cube3 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:30});
const cube4 = getCube({x:1, y:1, z:1}, {x:-10, y:0, z:20});

const sun1 = getSphere(new Vector3(40, 220, -450), 120, 24, 0xFFDD00);
const planet1 = getSphere(new Vector3(-120, 100, -550), 60, 24,  0x00FFDD);
sun1.frustumCulled = false;
planet1.frustumCulled = false;

const pipeline1 = getPipeline(new Vector3(20, 0, 0), new Vector3(-30, 0, -300));
const pipeline2 = getPipeline( new Vector3(-40, 0, -170), new Vector3(-40, 0, 20));

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);
scene.add( sun1 );
scene.add( planet1 );
scene.add( pipeline1 );
scene.add( pipeline2 );

camera.position.z = 40;
camera.position.y = 0;
camera.lookAt({x: 0, y: 0, z: 0});

scene.add(camera);






import {createDashboard} from './dashboard';


import {cameraUpdate} from './cameraUpdate';
import {checkPipelines} from './checkPipelines';
import {dashboardUpdate} from './dashboardUpdate';
import {firingUpdate} from './firingUpdate';


const dashboard = createDashboard(container);

function animate() {
    requestAnimationFrame( animate );

    checkPipelines(camera, [pipeline1, pipeline2]);
    cameraUpdate(camera);
    dashboardUpdate(dashboard);
    /* logicUpdate(); */ 
    firingUpdate(scene, camera);
 
    renderer.render( scene, camera );
}


animate(); 
