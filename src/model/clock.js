
import {Clock} from 'three';


const clock = new Clock(false);
let globalCounter = 0;

const increaseGlobalCounter = () => {
    globalCounter = (globalCounter+1) % 360;
};

export {clock, globalCounter, increaseGlobalCounter};
