import * as THREE from 'three';
import ThreeBSPfunc from 'three-js-csg';

const ThreeBSP = ThreeBSPfunc(THREE);

const compoundObject = () => {
    const box = new THREE.Mesh(new THREE.BoxGeometry(150, 30, 30));
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 32));

    const dock1 = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20));
    const dock2 = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20));
    dock1.translateZ(-5);
    dock1.translateX(50);
    dock2.translateZ(-5);
    dock2.translateX(-50);

    const sBSP = new ThreeBSP(sphere);
    const bBSP = new ThreeBSP(box);
    const dock1BSP = new ThreeBSP(dock1);
    const dock2BSP = new ThreeBSP(dock2);

    const sub = bBSP.union(sBSP).subtract(dock1BSP).subtract(dock2BSP);

    const newMesh = sub.toMesh();
    newMesh.receiveShadow = true;
    newMesh.castShadow = true;
    newMesh.material = new THREE.MeshLambertMaterial({ color: 0xaaaaff, flatShading: false});

    return newMesh;

};

export {compoundObject};
