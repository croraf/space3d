
import {camera, scene, renderer, container} from './setup/webGLsetup';

import './redux/store';

import {getLine, getCube, getCircle, getSphere, getTorus} from './objectCreators';

import {attachKeysHandlers, attachMouseHandlers} from './setup/attachEventHandlers';

import {cameraUpdate} from './cameraUpdate';

import {sceneUpdate} from './scene';

attachKeysHandlers(camera);
attachMouseHandlers();

import {Vector3} from 'three';

/* const line1 = getLine(0);
const line2 = getLine(-90); */

const cube1 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:0});
const cube2 = getCube({x:1, y:1, z:1}, {x:10, y:0, z:10});
const cube3 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:20});
const cube4 = getCube({x:1, y:1, z:1}, {x:-10, y:0, z:10});
const circle1 = getCircle();
const sphere1 = getSphere(new Vector3(0, 80, -40), 50); 
const torus1 = getTorus({x:0, y:0, z:0});
const torus2 = getTorus({x:0, y:0, z:-90});

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4); 
/* scene.add(line1);
scene.add(line2); */
scene.add( circle1 ); 
scene.add( sphere1 );
scene.add( torus1 );
scene.add( torus2 );


camera.position.z = 100;
camera.position.y = 0;
camera.lookAt({x: 0, y: 0, z: 0});



import {createDashboard} from './dashboard';
import {dashboardUpdate} from './dashboardUpdate';

const dashboard = createDashboard(container);

function animate() {
    requestAnimationFrame( animate );

    cameraUpdate(camera);
    dashboardUpdate(dashboard);
    /* logicUpdate(); */ 
    sceneUpdate(scene, camera);
 
    renderer.render( scene, camera );
}


animate(); 
