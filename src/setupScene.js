import {getCube, getSphere} from './objects/objectCreators';

import {Vector3, TextureLoader, SpotLight, DirectionalLight, LensFlare, AdditiveBlending, Color} from 'three';

import {scene} from './setup/createScene';

const setupScene = () => {
    
    const cube1 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:10});
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
    scene.add(cube4);



    const sphereA = getSphere(new Vector3(0, 0, 10), 3, 16, 0xFFDD00, undefined, true);
    sphereA.name = 'target';

    scene.add(sphereA);

    /* const planet2 = getSphere(new Vector3(-120, 0, -350), 60, 24,  0x00FFDD);
    scene.add( planet2 ); */

    const textureLoader = new TextureLoader();

    textureLoader.load('space4.png', (texture)=>{

        const planet1 = getSphere(new Vector3(-120, 130, -750), 60, 24,  0x00FFDD, texture, true);
        planet1.name = 'London';
        scene.add( planet1 );
    }); 

    textureLoader.load('sun2.jpg', (texture)=>{

        const sun1 = getSphere(new Vector3(850, 250, -350), 170, 24, 0xFFDD00, texture);
        sun1.name = 'Omega';
        scene.add( sun1 );


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

        const planet3 = getSphere(new Vector3(-500, -160, -400), 80, 24, 0xFFDD00, texture, true);
        planet3.name = 'Moscow';
        scene.add( planet3 );
    });


    
    /* spotLight.castShadow = true; */
    
    /* spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30; */

    /* const dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight); */
};

export {setupScene};
