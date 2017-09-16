// Setups camera, scene and renderer. Mounts renderer into HTML DOM.

import { PerspectiveCamera, WebGLRenderer, Clock} from 'three';

import './mystyle.css';

const clock = new Clock(false);

const camera = new PerspectiveCamera( 75, 11 / 6, 0.1, 3000 );

const renderer = new WebGLRenderer({antialias: true, alpha: true});

const container = document.getElementById('my_gl_container');
container.style.position = 'absolute';
renderer.setSize( 1100, 600 );

const canvasElement = renderer.domElement;
container.appendChild( canvasElement );

/* const audio_file = new Audio('engine3.mp3');
audio_file.play();
audio_file.loop = true; */
/* container.appendChild(audio_file); */

export {camera, renderer, container, canvasElement, clock};
