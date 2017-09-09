// Setups camera, scene and renderer. Mounts renderer into HTML DOM.

import { PerspectiveCamera, WebGLRenderer, Scene } from 'three';




const camera = new PerspectiveCamera( 75, 4 / 3, 0.1, 1000 );


const scene = new Scene();


const renderer = new WebGLRenderer({antialias: true});

const container = document.getElementById('my_gl_container');
renderer.setSize( 640, 480 );
container.appendChild( renderer.domElement );

export {camera, renderer, scene};
