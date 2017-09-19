import {sceneObjects} from '../scene/sceneObjects';
import {Vector3} from 'three';

const engine = {
    cruise: {
        on: false,
        loading: 0
    },
    pipeline: null,
    flight: {
        on: false,
        direction: undefined
    },
    autopilot: {
        on: false,
        target: null
    }
};

const changeThrust = (direction) => {
    if (direction > 0 && engine.cruise.loading + 1 === 100) {
        engine.cruise = {loading: 100, on: true};
    }
    else {
        engine.cruise = {loading: direction > 0 ? engine.cruise.loading + 1 : engine.cruise.loading - 1, on: false};
    }
};

const stopThrust = () => {
    engine.cruise = {loading: 0, on: false};
};

const enterPipeline = (pipeline) => {

    stopThrust();
    engine.pipeline = pipeline;
};

const exitPipeline = () => {
    engine.pipeline = null;
};

const toggleAutopilot = () => {
    console.log('toggle autopilot');
    if (engine.autopilot.on === false && engine.pipeline === null && sceneObjects.selected) {
        engine.autopilot.on = true;
        engine.autopilot.target = sceneObjects.selected.name ? sceneObjects.selected : sceneObjects.selected.parent;
        console.log(engine.autopilot.target);
    } else if (engine.autopilot.on === true) {
        engine.autopilot.on = false;
        engine.autopilot.target = null;
    }
};


export {engine, changeThrust, stopThrust, enterPipeline, exitPipeline, toggleAutopilot};
