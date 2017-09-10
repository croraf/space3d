// Setups camera, scene and renderer. Mounts renderer into HTML DOM.

import { PerspectiveCamera, WebGLRenderer, Scene } from 'three';

import {store} from '../redux/store';

import './mystyle.css';

const camera = new PerspectiveCamera( 75, 4 / 3, 0.1, 1000 );

const scene = new Scene();

const renderer = new WebGLRenderer({antialias: true});

const container = document.getElementById('my_gl_container');
renderer.setSize( 640, 480 );

const canvasElement = renderer.domElement;
container.appendChild( canvasElement );

const spaceshipWindow = document.createElement('div');
spaceshipWindow.setAttribute('class', 'spaceshipWindow'); 

container.appendChild( spaceshipWindow );

export {camera, renderer, scene, container, canvasElement};
