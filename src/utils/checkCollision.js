import {Box3, Matrix4, Color} from 'three';

const checkCollisionSpheres = (sphere1, sphere2) => {
    // console.log(sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()), sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius); 
    return sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()) < sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius;
};

let theBox;
let boxPosition;
let boxSphereRadius;
let boxMatrixInverse;
let AABB;


const setupHelpersForCheckIfInBox = (box) => {

    theBox = box;
    boxPosition = box.position;
    const parameters = box.geometry.parameters;
    boxSphereRadius = Math.sqrt(parameters.width*parameters.width + parameters.height*parameters.height + parameters.depth*parameters.depth) / 2;
    box.updateMatrixWorld(true);
    boxMatrixInverse = new Matrix4().getInverse(box.matrixWorld, false);
    // console.log('setup matrix:', JSON.stringify(box.matrixWorld), JSON.stringify(boxMatrixInverse));
    const inverseBox = box.clone();
    inverseBox.applyMatrix(boxMatrixInverse);
    AABB = new Box3().setFromObject(inverseBox);

    //console.log(inverseBox);
};



const colorRed = new Color('red');
const colorGreen = new Color('green');

const checkIfInBox = (point) => {

    let inBox = false;

    if (point.distanceTo(boxPosition) < boxSphereRadius) {

        //console.log('in bounding sphere');
        const inversePoint = point.clone();
        //console.log('camera point:', inversePoint);
        inversePoint.applyMatrix4(boxMatrixInverse);
        //console.log('inverse camera point:', inversePoint);
        inBox = AABB.containsPoint(inversePoint);
    }

    theBox.material.color = inBox ? colorRed : colorGreen;
    
};

export {checkCollisionSpheres, checkIfInBox, setupHelpersForCheckIfInBox};
