import { BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, Geometry, Vector3, Line } from 'three';

const getCube = () => {

    var geometry = new BoxGeometry( 1, 1, 1 );
    var material = new MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new Mesh( geometry, material );

    return cube;

};

const getArrow = () => {

    var material = new LineBasicMaterial({ color: 0x0000ff });
    var geometry = new Geometry( 1, 1, 1 );

    geometry.vertices.push(new Vector3(-10, 0, 0));
    geometry.vertices.push(new Vector3(0, 10, 0));
    geometry.vertices.push(new Vector3(10, 0, 0));

    var line = new Line(geometry, material);

    return line;
};

export {getCube, getArrow};
