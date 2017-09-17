// Setups camera, scene and renderer. Mounts renderer into HTML DOM.

import { PerspectiveCamera, WebGLRenderer, Clock} from 'three';
import {setupAudio} from './setupAudio';
import './mystyle.css';

const clock = new Clock(false);

const camera = new PerspectiveCamera( 75, 11 / 6, 0.1, 3000 );

const renderer = new WebGLRenderer({antialias: true, alpha: true});

const container = document.getElementById('my_gl_container');
container.style.position = 'absolute';
renderer.setSize( 1100, 600 );

const canvasElement = renderer.domElement;
canvasElement.setAttribute('class', 'mainCanvas');
container.appendChild( canvasElement );

setupAudio();

export {camera, renderer, container, canvasElement, clock};
