
import {getSphere} from './objects/objectCreators';
import {Vector3} from 'three';

import {weapons} from './redux/ship/weapons';

let count = 0;

const moveBullet = (scene, bulletSphere, bulletDirection, i) => {

    bulletSphere.translateOnAxis(bulletDirection, 1.1);

    if (i===0) scene.remove(bulletSphere);
    else setTimeout(()=>{moveBullet(scene, bulletSphere, bulletDirection, i-1)}, 35);
}

const animateFire = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.2, 8);
    scene.add(bulletSphere);

    moveBullet(scene, bulletSphere, bulletDirection, 50);
    
    console.log('FIRE');
}



const firingUpdate = (scene, camera) => {
    
    count++;
    count = count % 120;
    
    if (weapons.turret && count%10 === 0) animateFire(scene, camera);

};

export {firingUpdate};
