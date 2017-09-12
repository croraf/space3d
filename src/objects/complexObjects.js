import {Group} from 'three';

import {getCircle, getTorus} from './objectCreators';

const getPipelineEntrance = (position, target) => {

    const pipelineEntrance = new Group();
    pipelineEntrance.add(getTorus());
    pipelineEntrance.add(getCircle());

    pipelineEntrance.translateOnAxis(position, 1);
    
    pipelineEntrance.lookAt(target); 

    return pipelineEntrance;
}

const getPipeline = (entrance1, entrance2) => {
    
    const pipeline = new Group();
    pipeline.add(getPipelineEntrance(entrance1, entrance2));
    pipeline.add(getPipelineEntrance(entrance2, entrance1));

    return pipeline;
}

export {getPipeline};
