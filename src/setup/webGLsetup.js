// Setups camera, scene and renderer. Mounts renderer into HTML DOM.

import { PerspectiveCamera, WebGLRenderer} from 'three';

import './mystyle.css';


const camera = new PerspectiveCamera( 75, 4 / 3, 0.1, 1000 );

const renderer = new WebGLRenderer({antialias: true});

const container = document.getElementById('my_gl_container');
renderer.setSize( 640, 480 );

const canvasElement = renderer.domElement;
container.appendChild( canvasElement );

const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 

container.appendChild( spaceshipWindow );

/* const audio_file = new Audio('engine3.mp3');
audio_file.play();
audio_file.loop = true; */
/* container.appendChild(audio_file); */

export {camera, renderer, container, canvasElement};
