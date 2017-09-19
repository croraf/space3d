import {sceneObjects} from '../scene/sceneObjects';

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
    autopilot: false
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
    if (engine.autopilot === false && engine.cruise.on === false && engine.pipeline === null && sceneObjects.selected) {
        engine.cruise.loading = 0;
        engine.autopilot = true;
    } else if (engine.autopilot === true) {
        engine.autopilot = false;
    }
};


export {engine, changeThrust, stopThrust, enterPipeline, exitPipeline, toggleAutopilot};
