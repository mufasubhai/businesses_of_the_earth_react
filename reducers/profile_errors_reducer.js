import {
    CLEAR_ERRORS,
    RECEIVE_PROFILE_ERRORS
} from '../actions/data_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
