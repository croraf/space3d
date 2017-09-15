import { BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, 
    Geometry, Vector3, Line, CircleGeometry, SphereGeometry, 
    TorusGeometry, DoubleSide,
    TubeGeometry, LineCurve3, MeshPhongMaterial, SpriteCanvasMaterial, Sprite, Color, TextureLoader, ImageUtils} from 'three';

import SPE from 'shader-particle-engine';

const getCube = (size={x:1, y:1, z:1}, position={x:0, y:0, z:0}, wireframe=true, opacity=1) => {

    var geometry = new BoxGeometry( size.x, size.y, size.z );
    var material = new MeshBasicMaterial( { 
        color: 0x00ff00, 
        transparent: (opacity===1 ? false : true), 
        wireframe: wireframe, 
        opacity: opacity 
    } );
    var cube = new Mesh( geometry, material );

    cube.translateOnAxis(new Vector3(position.x, position.y, position.z), 1); 

    /* cube.intersectable = true; */
    
    return cube;

};

const getLine = (z) => {

    var material = new LineBasicMaterial({ color: 0x0000ff });
    var geometry = new Geometry( 1, 1, 1 );

    geometry.vertices.push(new Vector3(-10, 0, z));
    geometry.vertices.push(new Vector3(0, 10, z));
    geometry.vertices.push(new Vector3(10, 0, z));
    geometry.vertices.push(new Vector3(0, -10, z));
    geometry.vertices.push(new Vector3(-10, 0, z));

    var line = new Line(geometry, material);

    return line;
};

const getCircle = (position=new Vector3(0,0,0)) => {
    const geometry = new CircleGeometry( 9, 8 );
    const material = new MeshBasicMaterial( { color: 0xcccccc, transparent: true, opacity: 0.3 } );
    material.side = DoubleSide;

    const circle = new Mesh( geometry, material );

    circle.translateOnAxis(position, 1);
    
    return circle;
};

const getSphere = (position, radius, slices, color=0xFFFFFF, texture, phong) => {
    const geometry = new SphereGeometry( radius, slices, slices );

    let material;

    if (texture) {

        if (phong) {
            
            material = new MeshPhongMaterial({map: texture, specular: 0x555555, shininess: 10 });
        } else {

            material = new MeshBasicMaterial({
                map: texture
            });
        }
        
    } else {

        if (phong){
            material = new MeshPhongMaterial({color: color, specular: 0x555555, shininess: 20 });
        } else {
            material = new MeshBasicMaterial( { color: color } );
        }
    }

    const sphere = new Mesh( geometry, material );

    sphere.translateOnAxis(position, 1); 
    
    return sphere;
};

const getTorus = (position=new Vector3(0,0,0)) => {
    var geometry = new TorusGeometry( 10, 1, 8, 8 );
    var material = new MeshPhongMaterial( { 
        color: 0x0000cc, wireframe: true, specular: 0x555555, shininess: 20, emissive: 'blue', emissiveIntensity: 0.2 
    } );
    var torus = new Mesh( geometry, material );
    
    torus.translateOnAxis(new Vector3(position.x, position.y, position.z), 1);

    return torus;
};

const getBullet = (position) => {
    const geometry = new SphereGeometry( 2, 8, 8 );
    const material = new MeshBasicMaterial( { color: 0xFFDD00 } );
    const sphere = new Mesh( geometry, material );

    sphere.translateOnAxis(new Vector3(position.x, position.y, position.z), 1); 
    
    return sphere;
};

const getTube = (position1, position2) => {
    const path = new LineCurve3(position1, position2);
    var geometry = new TubeGeometry( path, 3, 4, 24, false );
    var material = new MeshBasicMaterial( { color: 0x00ffff, transparent: true, opacity: 0.3  } );
    material.side = DoubleSide;

    var tube = new Mesh( geometry, material );

    /* sphere.translateOnAxis(new Vector3(position.x, position.y, position.z), 1); */ 
    
    return tube;
};

const getParticleSystem = (scene) => {

    /* new TextureLoader().load('starParticle.png', (texture)=>{ */
        
    const particleGroup = new SPE.Group({texture: {value: new TextureLoader().load('starParticle.png')}, maxParticleCount: 70});

    const emitter = new SPE.Emitter({
        maxAge: {
            value: 25
        },
        position: {
            value: new Vector3(-80, 0, 0),
            spread: new Vector3( 30, 20, 30 )
        },
        activeMultiplier: 1,
        acceleration: {
            value: new Vector3(0, 0, -0.2),
            /* spread: new Vector3( 0, 0, 0 ) */
        },
        velocity: {
            value: new Vector3(0, 0, 5),
            /* spread: new Vector3(10, 7.5, 10) */
        },
        color: {
            value: [ new Color('white'), new Color('red') ]
        },
        size: {
            value: 2
        },
        angle: {
            value: [ 0, Math.PI * 0.125 ]
        },
        particleCount: 60
    });

    particleGroup.addEmitter( emitter );
    particleGroup.mesh.nonIntersectable = true;
    scene.add( particleGroup.mesh );

    particleGroup.tick(10);
    setInterval(()=>{particleGroup.tick(0.03);}, 60);

    const wrapper = getCube({x:30, y:20, z:50}, {x:-80, y:0, z:20}, true, 0);
    wrapper.name = 'Nebula Europe';
    scene.add(wrapper);
};

export {getCube, getLine, getCircle, getSphere, getTorus, getTube, getParticleSystem};
