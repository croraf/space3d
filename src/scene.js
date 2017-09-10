import {store} from './redux/store';
import {getSphere} from './objectCreators';
import {Vector3} from 'three';

let count = 0;

const moveBullet = (scene, bulletSphere, bulletDirection, i) => {

    bulletSphere.translateOnAxis(bulletDirection, 1);

    if (i===0) scene.remove(bulletSphere);
    else setTimeout(()=>{moveBullet(scene, bulletSphere, bulletDirection, i-1)}, 50);
}

const animateFire = (scene, camera) => {

    const bulletDirection = camera.getWorldDirection();
    const bulletSphere = getSphere(camera.getWorldPosition().addScaledVector(bulletDirection, 5), 0.3);
    scene.add(bulletSphere);

    moveBullet(scene, bulletSphere, bulletDirection, 50);
    
    console.log('FIRE');
}

const sceneUpdate = (scene, camera) => {
    
    count++;
    count = count % 120;
    
    if (store.getState().firing && count%10 === 0) animateFire(scene, camera);
    

    /* scene.children[1].rotation.x += 0.01;
    scene.children[1].rotation.y += 0.01; */
};

export {sceneUpdate};
