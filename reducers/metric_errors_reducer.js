import {
    CLEAR_ERRORS,
    RECEIVE_METRIC_ERRORS
} from '../actions/data_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_METRIC_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
