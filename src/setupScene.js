import {getCube, getSphere} from './objects/objectCreators';

import {Vector3, TextureLoader} from 'three';

import {scene} from './setup/createScene';
const setupScene = () => {
    
    const cube1 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:10});
    const cube2 = getCube({x:1, y:1, z:1}, {x:10, y:0, z:20});
    const cube3 = getCube({x:1, y:1, z:1}, {x:0, y:0, z:30});
    const cube4 = getCube({x:1, y:1, z:1}, {x:-10, y:0, z:20});

    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    scene.add(cube4);


    const sphereA = getSphere(new Vector3(0, 0, 10), 3, 16, 0xFFDD00);
    sphereA.name = 'target';

    scene.add(sphereA);

    /* const planet2 = getSphere(new Vector3(-120, 0, -350), 60, 24,  0x00FFDD);
    scene.add( planet2 ); */

    new TextureLoader().load('space4.png', (texture)=>{

        const planet1 = getSphere(new Vector3(-120, 100, -550), 60, 24,  0x00FFDD, texture);
        planet1.name = 'London';
        scene.add( planet1 );
    }); 

    new TextureLoader().load('sun.jpg', (texture)=>{

        const sun1 = getSphere(new Vector3(40, 220, -450), 120, 24, 0xFFDD00, texture);
        sun1.name = 'Omega';
        scene.add( sun1 );
    });

    new TextureLoader().load('planet3.jpg', (texture)=>{

        const planet3 = getSphere(new Vector3(-400, -100, -100), 50, 24, 0xFFDD00, texture);
        planet3.name = 'Moscow';
        scene.add( planet3 );
    });
};

export {setupScene};
