import {Raycaster, Vector2} from 'three';

import {scene} from '../setup/createScene';
import {camera} from '../setup/webGLsetup';

import {setSelectedElement} from '../dashboardUpdate';

import {canvasElement, container} from '../setup/webGLsetup';

import {sceneObjects} from '../model/scene/sceneObjects';

const elementWidth = canvasElement.offsetWidth/2;
const elementHeight = canvasElement.offsetHeight/2;
const shiftX = container.offsetLeft + elementWidth;
const shiftY = container.offsetTop + elementHeight;

const raycaster =  new Raycaster();  


const checkMouseIntersect = (event) => {

    const viewX = (event.clientX - shiftX) / elementWidth;
    const viewY = (event.clientY - shiftY) / elementHeight;

    const mouse3D = new Vector2( viewX, -viewY/* , 0.5 */);     
    
                                          
    raycaster.setFromCamera( mouse3D, camera );

    const intersects = raycaster.intersectObjects( scene.children.filter(object => !object.nonIntersectable), true );

    sceneObjects.selected = intersects.length > 0 ? intersects[0].object : null;
    /* setSelectedElement(intersects); */
    
    /* intersects.forEach(element => {
        console.log(element);
        
    }); */

    /* intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff ); */
};

export {checkMouseIntersect};
