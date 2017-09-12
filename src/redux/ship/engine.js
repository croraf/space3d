const engine = {
    cruise: {
        on: false,
        loading: 0
    },
    pipeline: null,
    flight: {
        on: false,
        direction: undefined
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
}


export {engine, changeThrust, stopThrust, enterPipeline, exitPipeline};
