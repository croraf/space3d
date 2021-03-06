
import {getSphere} from './objects/objectCreators';
import {Vector3, Color} from 'three';

import {weapons} from './model/ship/weapons';

import {checkCollisionSpheres} from './utils/checkCollision';

import {setWonScreen} from './dashboardUpdate';

import {sceneObjects} from './model/scene/sceneObjects';

import {sounds} from './model/sounds/sounds';

import {globalCounter} from './model/clock';

let returnColor = setTimeout(() => {}, 10000);
const animateHit = (target, bulletType) => {

    /* const color = target.material.color; */

    clearTimeout(returnColor);
    returnColor = setTimeout(() => {target.material.emissiveIntensity = 0;}, bulletType === 'rocket' ? 600 : 100);
    
    /* color.set('red'); */
    target.material.emissive = new Color('red');

    switch (bulletType) {
        case 'rocket':
            target.material.emissiveIntensity = 0.4;
            target.health -= 10;
            sounds.rocketMissile.pause();
            sounds.rocketMissile.currentTime = 0;
            break;
        case 'turret':
            target.material.emissiveIntensity = 0.2;
            target.health -= 1;
            break;
        default:
            break;
    }

    if (target.health <=0) {
        clearTimeout(returnColor);
        
        target.dead = true;
        target.material.transparent = true;
        target.material.opacity = 0.2;
    }
};

const moveBullet = (scene, bulletSphere, bulletDirection, i) => {

    bulletSphere.translateOnAxis(bulletDirection, 1);

    let hit = false;
    sceneObjects.targets.forEach((target) => {
        
        if (target.dead === true || hit === true) return;

        if (checkCollisionSpheres(bulletSphere, target)){
            animateHit(target, bulletSphere.bulletType);
            scene.remove(bulletSphere);
            hit = true;
        }
    });

    if (hit === true) {
        let gameWon = true;
        sceneObjects.targets.forEach(target => {
            if (target.dead === false) gameWon = false; 
        });
        if (gameWon === true){
            setWonScreen();
        }
        return;
    }
    else {
        if (i===0) scene.remove(bulletSphere);
        else setTimeout(()=>{moveBullet(scene, bulletSphere, bulletDirection, i-1);}, 35);
    }
};

const animateFire = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.2, 8);

    bulletSphere.nonIntersectable = true;
    bulletSphere.bulletType = 'turret';
    scene.add(bulletSphere);

    /* sounds.bullet.currentTime = 0; 
    if (sounds.bullet.paused) {sounds.bullet.play();}*/

    moveBullet(scene, bulletSphere, bulletDirection, 50);
};

const animateRocket = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.4, 8, 'red');
    
    bulletSphere.nonIntersectable = true;
    bulletSphere.bulletType = 'rocket';
    scene.add(bulletSphere);

    sounds.rocketMissile.play();

    moveBullet(scene, bulletSphere, bulletDirection.multiplyScalar(1.2), 100);
};


const firingUpdate = (scene, camera) => {
    
    if (weapons.turret && globalCounter % 10 === 0) {
        animateFire(scene, camera);
    }

    if (weapons.rocket.fired === true) {
        weapons.rocket.fired = false;
        animateRocket(scene, camera);
    }
};

export {firingUpdate};
