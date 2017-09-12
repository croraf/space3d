import { PerspectiveCamera, WebGLRenderer, Scene, Fog, Color, TextureLoader, CubeTextureLoader, DoubleSide} from 'three';

const loader = new CubeTextureLoader();
loader.setPath();
    
const texture = loader.load( [
    'space7.png', 'space7.png', 'space7.png', 'space7.png', 'space7.png', 'space7.png'
] ); 


const createScene = () => {



    /* const texture = new TextureLoader().load('./spacebcg.jpg'); */

    const scene = new Scene();

    /* const fog = new Fog('orange', 50, 500);

    scene.fog = fog; */
    /* scene.background = new Color( 0xff0000 ); */
    scene.background = texture;
    /* scene.background.material.side = DoubleSide */

    return scene;
}

export {createScene};
