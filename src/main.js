
import {camera, scene, renderer} from './setup';


import {getArrow, getCube} from './sceneObjects';

import {attachKeysHandlers} from './userInputHandlers';

import {cameraUpdate} from './userInputHandlers';

const arrow1 = getArrow();
const cube1 = getCube();

scene.add(cube1);
scene.add(arrow1);

camera.position.z = 10;
camera.position.y = 0;
camera.lookAt({x: 0, y: 0, z: 0});

attachKeysHandlers(camera);

function animate() {
    requestAnimationFrame( animate );

    cameraUpdate(camera);
    /* logicUpdate(); */ 
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
 
    renderer.render( scene, camera );
}


animate(); 
