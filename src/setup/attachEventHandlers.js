
import {canvasElement} from './webGLsetup';

import {weapons, fireRocket} from '../redux/ship/weapons';
import {toggleAutopilot} from '../redux/ship/engine';

import {checkMouseIntersect} from '../utils/checkMouseIntersect';

const keysActive = {};
const mouseActive = {left: false, right: false};
const viewTarget = {x: 0, y: 0};

const onDocumentKeyDown = (event) => {

    const keyCode = event.which;
    switch (keyCode) {
        case 32:
            toggleAutopilot();
            break;
        default:
            break;
    }
        
    keysActive[keyCode] = true; 
};

const onDocumentKeyUp = (event) => {

    const keyCode = event.which;
    delete keysActive[keyCode];
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
    /* console.log(event); */
    if (event.which === 1) {
        if (keysActive['17'] === true) {fireRocket();}
        else {weapons.turret = true;}
    } else if (event.which === 3) {
        /* fireRocket(); */
        checkMouseIntersect(event);
    }
}

const mouseUpHandler = (event) => {
    /* console.log(event); */
    if (event.which === 1) {
        weapons.turret = false;
    } else if (event.which === 3) {
    }
}

const attachHandlers = () => {

    document.addEventListener('keydown', onDocumentKeyDown, false);
    document.addEventListener('keyup', onDocumentKeyUp, false);

    document.addEventListener('mousemove', mouseMoveHandler, false);
    document.addEventListener('mousedown', mouseDownHandler, false);
    document.addEventListener('mouseup', mouseUpHandler, false);
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('blur', () => {
        for (var x in keysActive) if (keysActive.hasOwnProperty(x)) delete keysActive[x];
    });
}

export {attachHandlers, keysActive, viewTarget, mouseActive};
