
import {getSphere} from './objects/objectCreators';
import {Vector3, Color} from 'three';

import {weapons} from './redux/ship/weapons';

import {checkCollisionSpheres} from './utils/checkCollision';

let count = 0;

let returnColor = setTimeout(() => {}, 10000);
const animateHit = (target, bulletType) => {

    /* const color = target.material.color; */

    clearTimeout(returnColor);
    returnColor = setTimeout(() => {target.material.emissiveIntensity = 0;}, bulletType === 'rocket' ? 600 : 100);
    
    /* color.set('red'); */
    target.material.emissive = new Color('red');
    bulletType === 'rocket' ? target.material.emissiveIntensity = 0.4 : target.material.emissiveIntensity = 0.2;
}

const moveBullet = (scene, bulletSphere, bulletDirection, i, isRocket) => {

    bulletSphere.translateOnAxis(bulletDirection, 1);

    if (checkCollisionSpheres(bulletSphere, scene.getObjectByName('target'))){

        console.log(isRocket);
        animateHit(scene.getObjectByName('target'), bulletSphere.bulletType);
        scene.remove(bulletSphere);
    } else {
        
        if (i===0) scene.remove(bulletSphere);
        else setTimeout(()=>{moveBullet(scene, bulletSphere, bulletDirection, i-1)}, 35);
    }

}

const animateFire = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.2, 8);

    bulletSphere.nonIntersectable = true;
    scene.add(bulletSphere);

    moveBullet(scene, bulletSphere, bulletDirection, 50);
}

const animateRocket = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.4, 8, 'red');
    
    bulletSphere.nonIntersectable = true;
    bulletSphere.bulletType = 'rocket';
    scene.add(bulletSphere);

    moveBullet(scene, bulletSphere, bulletDirection.multiplyScalar(1.2), 100);
}


const firingUpdate = (scene, camera) => {
    
    count++;
    count = count % 120;
    
    if (weapons.turret && count%10 === 0) {
        animateFire(scene, camera);
    }

    if (weapons.rocket.fired === true) {
        weapons.rocket.fired = false;
        animateRocket(scene, camera);
    }
};

export {firingUpdate};
