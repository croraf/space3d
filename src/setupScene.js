import {getCube, getSphere, getParticleSystem} from './objects/objectCreators';

import {Vector3, TextureLoader, SpotLight, LensFlare, AdditiveBlending, Color} from 'three';

import {scene} from './setup/createScene';

import {sceneObjects} from './redux/scene/sceneObjects';

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

        const sun = getSphere(new Vector3(850, 250, -350), 170, 24, 0xFFDD00, texture);
        sun.name = 'Omega';
        scene.add( sun );


        const spotLight = new SpotLight( 0xffffff, 1 );
        spotLight.position.set(650, 220, -350);

        scene.add( spotLight );
    });

    textureLoader.load('lensflare.png', (texture)=>{

        const flareColor = new Color( 0xffffff );
        /* flareColor.setHSL( h, s, l + 0.5 ); */
        const lensFlare = new LensFlare( texture, 700, 0.0, AdditiveBlending, flareColor );
        
        lensFlare.position.set(650, 220, -280);
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


    /* const nebula = getParticleSystem(textureLoader, scene); */
};

export {setupScene};
