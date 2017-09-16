import {Vector3, Quaternion} from 'three';

import {scene} from './setup/createScene';


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
    
    /* scene.getObjectByName('target').translateOnAxis(new Vector3(1, 0, 0), 0.02); */

    rotateAroundWorldAxis(scene.getObjectByName('target1'), new Vector3(0,0,-200), new Vector3(0,1,0), 0.001);
    rotateAroundWorldAxis(scene.getObjectByName('target2'), new Vector3(100,0,100), new Vector3(0,1,0), 0.001);
};

export {sceneUpdate};
