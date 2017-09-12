import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import {thrustReducer, firingReducer, pipelineReducer} from './ship/reducers';

const rootReducer = combineReducers({
    thrust: thrustReducer,
    firing: firingReducer,
    pipeline: pipelineReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};
