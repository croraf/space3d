
import {Vector3} from 'three';

const keysActive = {};

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


const speed = 0.2;
const rotationSpeed = 3/180 * Math.PI;

const cameraUpdate = (camera) => {
    

    Object.keys(keysActive).forEach(keyCode => {

                
        const cameraDirection = camera.getWorldDirection()/* .sub(camera.position).normalize() */;

        console.log(camera.getWorldDirection()/* , cameraDirection.cross(new Vector3(0,0,1)) */);
        
        console.log('imamo key', keyCode, typeof keyCode);

        switch (keyCode) {
            case '37':
                camera.rotateY(rotationSpeed);
                break;
            case '38':
                break;
            case '39':
                camera.rotateY(-rotationSpeed);
                break;
            case '40':
                break;
            case '65': /* a */
                camera.translateOnAxis(cameraDirection.cross(new Vector3(0,1,0)), - speed);
                break;
            case '68': /* d */
                camera.translateOnAxis(cameraDirection.cross(new Vector3(0,1,0)), speed);
                break;
            case '87': /* w */
                camera.translateOnAxis(cameraDirection, speed);
                break;
            case '83':/* s */
                camera.translateOnAxis(cameraDirection, -speed);
                break;
            case '32':
                // SPACE, restart
                camera.position.set(0, 0, 15);
                camera.lookAt({x: 0, y: 0, z: 0}); 
                break;
            default:
                return;
                break;
        }

        
        console.log(camera.position);
    });

        
};

export {attachKeysHandlers, cameraUpdate};
