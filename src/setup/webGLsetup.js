
import { WebGLRenderer} from 'three';
import {setupAudio} from './setupAudio';
import './mystyle.css';

const renderer = new WebGLRenderer({antialias: true, alpha: true});

const container = document.getElementById('my_gl_container');
container.style.position = 'absolute';
renderer.setSize( 1100, 600 );

const canvasElement = renderer.domElement;
canvasElement.setAttribute('class', 'mainCanvas');
container.appendChild( canvasElement );

setupAudio();

export {renderer, container, canvasElement};
