import {Vector3, Quaternion} from 'three';

import {scene} from './model/scene/scene';
import {sceneObjects} from './model/scene/sceneObjects';

import {globalCounter} from './model/clock';

var q = new Quaternion();

const rotateAroundWorldAxis = ( object, point, axis, angle ) => {

    q.setFromAxisAngle( axis, angle );

    object.applyQuaternion( q );

    object.position.sub( point );
    object.position.applyQuaternion( q );
    object.position.add( point );

    /* return this; */
};

const sceneUpdate = () => {

    if (globalCounter === 0) {
        sceneObjects.targets.forEach(target => {
            if (target.dead != true && target.health < 100) {
                target.health++;
            }
        });
    }
    /* scene.getObjectByName('target').translateOnAxis(new Vector3(1, 0, 0), 0.02); */


    rotateAroundWorldAxis(scene.getObjectByName('target1'), new Vector3(0,0,-200), new Vector3(0,1,0), 0.001);
    rotateAroundWorldAxis(scene.getObjectByName('target2'), new Vector3(100,0,100), new Vector3(0,1,0), 0.0015);
    rotateAroundWorldAxis(scene.getObjectByName('target3'), new Vector3(100,0,-300), new Vector3(0,1,0), 0.001);
    rotateAroundWorldAxis(scene.getObjectByName('target4'), new Vector3(0,0,-180), new Vector3(0,1,0), 0.0015);
};

export {sceneUpdate};
