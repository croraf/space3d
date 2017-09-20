const checkCollisionSpheres = (sphere1, sphere2) => {
    // console.log(sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()), sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius); 
    return sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()) < sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius;
};

const checkCollisionPointCube = (point, cube) => {

    /* const cubePosition = cube.position;
    const cubeSize = cube.size;

    if (point.x > cubePosition.x && point.x < cube.x + cube.size.x &&
        point.y > cubePosition.y && point.x < cube.x + cube.size.x &&
        point.z > cubePosition.z && point.x < cube.x + cube.size.x) */
};

export {checkCollisionSpheres};
