
import {Vector3, TextureLoader, DirectionalLight, LensFlare, AdditiveBlending, Color, SpotLight, CameraHelper} from 'three';


import {scene} from '../model/scene/scene';

import {sceneObjects} from '../model/scene/sceneObjects';

import {getPipeline} from '../objects/complexObjects';
import {getCube, getSphere, getParticleSystem, getPlanetRing, getBase, getCubePhong} from '../objects/objectCreators';
import {compoundObject} from '../objects/compoundObject';


const setupTargets = () => {

    let target = getSphere(new Vector3(0, 0, 30), 3, 16, 0xFFDD00, undefined, true);
    target.name = 'target1';
    target.health = 100;
    target.dead = false;
    scene.add(target);
    sceneObjects.targets.push(target);

    target = getSphere(new Vector3(0, 0, -10), 3, 16, 0xFFDD00, undefined, true);
    target.name = 'target2';
    target.health = 100;
    target.dead = false;
    scene.add(target);
    sceneObjects.targets.push(target);

    target = getSphere(new Vector3(0, 0, -100), 3, 16, 0xFFDD00, undefined, true);
    target.name = 'target3';
    target.health = 100;
    target.dead = false;
    scene.add(target);
    sceneObjects.targets.push(target);

    target = getSphere(new Vector3(-5, 0, -5), 3, 16, 0xFFDD00, undefined, true);
    target.name = 'target4';
    target.health = 100;
    target.dead = false;
    scene.add(target);
    sceneObjects.targets.push(target);

};

const setupScene = () => {
    
    /* const cube1 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:10});
    cube1.name = 'box1';
    scene.add(cube1);

    const cube2 = getCube({x:1, y:1, z:1}, {x:10, y:0, z:20});
    cube2.name = 'box2';
    scene.add(cube2);

    const cube3 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:30});
    cube3.name = 'box3';
    scene.add(cube3);

    const cube4 = getCube({x:1, y:1, z:1}, {x:-10, y:0, z:20});
    cube4.name = 'box4';
    scene.add(cube4); */
    setupTargets();

    const textureLoader = new TextureLoader();

    textureLoader.load('space4.png', (texture)=>{

        const planet = getSphere(new Vector3(-120, 140, -750), 50, 24,  0x00FFDD, texture, true);
        planet.name = 'London';
        scene.add( planet );
    }); 

    textureLoader.load('sun2.jpg', (texture)=>{

        /* const sun = getSphere(new Vector3(2850, 700, -1350), 270, 12, 0xFFDD00);
        sun.name = 'Omega';
        scene.add( sun ); */


        const directionalLight = new DirectionalLight( 0xffffaa, 1.5);
        directionalLight.position.set(850, 220, -350);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;  
        directionalLight.shadow.mapSize.height = 2048; 
        directionalLight.shadow.camera.near = 100;       
        directionalLight.shadow.camera.far = 1000;
        directionalLight.shadowCameraLeft = -600;
        directionalLight.shadowCameraRight = 100;
        directionalLight.shadowCameraTop = 20;
        directionalLight.shadowCameraBottom = -20;


        scene.add( directionalLight );

        /* const helper = new CameraHelper( directionalLight.shadow.camera );
        scene.add( helper ); */
    });

    textureLoader.load('lensflare.png', (texture)=>{

        const flareColor = new Color( 0xffffff );
        /* flareColor.setHSL( h, s, l + 0.5 ); */
        const lensFlare = new LensFlare( texture, 900, 0.0, AdditiveBlending, flareColor );
        
        lensFlare.position.set(650, 120, -280);
        scene.add( lensFlare );
    });

    textureLoader.load('planet3.png', (texture)=>{

        const planet = getSphere(new Vector3(-700, -100, -400), 90, 24, 0xFFDD00, texture, true);
        planet.name = 'Moscow';
        scene.add( planet );
    });

    textureLoader.load('planet_red.jpg', (texture)=>{
        
        const planet = getSphere(new Vector3(300, -160, -500), 60, 24, 0xFFDD00, texture, true);
        planet.name = 'Shanghai';
        scene.add( planet );
    });

    const ring = getPlanetRing(new Vector3(-120, 140, -750));
    scene.add(ring);


    const pipeline1 = getPipeline(new Vector3(20, 0, 0), new Vector3(-30, 0, -400));
    pipeline1.name = 'pipeline1';
    pipeline1.children[0].name = pipeline1.name + pipeline1.children[0].name;
    pipeline1.children[1].name = pipeline1.name + pipeline1.children[1].name;
    
    const pipeline2 = getPipeline(new Vector3(-40, 0, -300), new Vector3(-40, 0, 20));
    pipeline2.name = 'pipeline2';
    pipeline2.children[0].name = pipeline2.name + pipeline2.children[0].name;
    pipeline2.children[1].name = pipeline2.name + pipeline2.children[1].name;
    
    scene.add( pipeline1 );
    scene.add( pipeline2 );


    /* const cube1 = getCube({x:10, y:10, z:10}, {x:0, y:0, z:-20});
    cube1.name = 'box1';
    scene.add(cube1);
    cube1.rotateY(0.5); */

    const base = compoundObject();
    base.name = 'Base 1';
    base.translateOnAxis(new Vector3(150,0,250), 1);
    scene.add(base);

    const cube2 = getCubePhong({x:10, y:10, z:10}, {x:0, y:0, z:20});
    cube2.name = 'cube2';
    cube2.castShadow = true;
    scene.add(cube2);
    const cube3 = getCubePhong({x:10, y:10, z:10}, {x:-15, y:0, z:25});
    cube3.name = 'cube3';
    cube3.receiveShadow = true;
    scene.add(cube3);

    getParticleSystem(scene);
};

export {setupScene};
