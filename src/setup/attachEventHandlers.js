/* import {keysActive} from '../userInputHandlers'; */
import {canvasElement} from './webGLsetup';

import {fire} from '../redux/ship/actions';

const keysActive = {};
const mouseActive = {left: false, right: false};
const viewTarget = {x: 0, y: 0};

const onDocumentKeyDown = (event) => {
    const keyCode = event.which;

    keysActive[keyCode] = true; 
};

const onDocumentKeyUp = (event) => {
    const keyCode = event.which;

    delete keysActive[keyCode];
};

const attachKeysHandlers = () => {
    
    document.addEventListener('keydown', onDocumentKeyDown, false);
    document.addEventListener('keyup', onDocumentKeyUp, false);
};

const mouseMoveHandler = (event) => {

    const elementWidth = canvasElement.offsetWidth/2;
    const elementHeight = canvasElement.offsetHeight/2;

    const viewX = (event.clientX - (canvasElement.offsetLeft + elementWidth)) / elementWidth;
    const viewY = (event.clientY - (canvasElement.offsetTop + elementHeight)) / elementHeight;

    viewTarget.x = viewX;
    viewTarget.y = viewY;
}

const mouseDownHandler = (event) => {
    console.log(event);
    mouseActive.left = true;
    fire(true);
}

const mouseUpHandler = (event) => {
    console.log(event);
    mouseActive.left = false;
    fire(false);
}

const attachMouseHandlers = () => {

    document.addEventListener('mousemove', mouseMoveHandler, false);
    document.addEventListener('mousedown', mouseDownHandler, false);
    document.addEventListener('mouseup', mouseUpHandler, false);
}

export {attachKeysHandlers, attachMouseHandlers, keysActive, viewTarget, mouseActive};
