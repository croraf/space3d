import { PerspectiveCamera, WebGLRenderer, Scene, Fog, Color, TextureLoader, CubeTextureLoader} from 'three';

const loader = new CubeTextureLoader();
loader.setPath();
    
const texture = loader.load( [
    'space10.png', 'space10.png', 'space10.png', 'space10.png', 'space10.png', 'space10.png'
] ); 


/* const texture = new TextureLoader().load('./spacebcg.jpg'); */

const scene = new Scene();

/* const fog = new Fog('orange', 50, 500);

scene.fog = fog; */
scene.background = texture;


export {scene};
