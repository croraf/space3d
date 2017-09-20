
import { PerspectiveCamera} from 'three';

const camera = new PerspectiveCamera( 75, 11 / 6, 0.1, 3000 );

const setupCamera = (scene) => {
    camera.name = 'camera';
    camera.position.z = 10;
    camera.position.y = 0;
    camera.lookAt({x: 0, y: 0, z: 0});
    
    scene.add(camera);
    camera.nonIntersectable = true;
};

export {camera, setupCamera};
