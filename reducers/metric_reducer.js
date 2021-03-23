import {
    RECEIVE_METRIC_DATA
} from "../actions/data_actions"


const MetricReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_METRIC_DATA:
            return  action.metric
        default:
            return state;
    }
}

export default MetricReducer;