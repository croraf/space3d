const checkCollisionSpheres = (sphere1, sphere2) => {
    // console.log(sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()), sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius); 
    return sphere1.getWorldPosition().distanceTo(sphere2.getWorldPosition()) < sphere1.geometry.parameters.radius + sphere2.geometry.parameters.radius;
};

export {checkCollisionSpheres};
