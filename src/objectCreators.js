import { BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, Geometry, Vector3, Line, CircleGeometry, SphereGeometry, TorusGeometry, MeshLambertMaterial, DoubleSide } from 'three';

const getCube = (size={x:1, y:1, z:1}, position={x:0, y:0, z:0}) => {

    var geometry = new BoxGeometry( size.x, size.y, size.z );
    var material = new MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new Mesh( geometry, material );

    cube.translateOnAxis(new Vector3(position.x, position.y, position.z), 1); 

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

const getCircle = () => {
    const geometry = new CircleGeometry( 10, 8 );
    const material = new MeshBasicMaterial( { color: 0xcccccc, transparent: true, opacity: 0.3 } );
    material.side = DoubleSide;

    const circle = new Mesh( geometry, material );

    circle.translateOnAxis(new Vector3(0, 0, 0), 1);
    
    return circle;
}

const getSphere = (position, radius) => {
    const geometry = new SphereGeometry( radius, 32, 32 );
    const material = new MeshBasicMaterial( { color: 0xFFDD00 } );
    const sphere = new Mesh( geometry, material );

    sphere.translateOnAxis(position, 1); 
    
    return sphere;
}

const getTorus = (position) => {
    var geometry = new TorusGeometry( 10, 1, 8, 16 );
    var material = new MeshBasicMaterial( { color: 0x0000cc } );
    var torus = new Mesh( geometry, material );
    
    torus.translateOnAxis(new Vector3(position.x, position.y, position.z), 1);

    return torus;
}

const getBullet = (position) => {
    const geometry = new SphereGeometry( 2, 8, 8 );
    const material = new MeshBasicMaterial( { color: 0xFFDD00 } );
    const sphere = new Mesh( geometry, material );

    sphere.translateOnAxis(new Vector3(position.x, position.y, position.z), 1); 
    
    return sphere;
}

export {getCube, getLine, getCircle, getSphere, getTorus};
