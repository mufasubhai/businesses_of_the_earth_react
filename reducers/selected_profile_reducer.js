import {
    SET_CURRENT_PROFILE
} from '../actions/data_actions'


const SelectedProfileReducer = (state = null, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case SET_CURRENT_PROFILE:
         
            return action.profile
        default:
            return state;
    }
};

export default SelectedProfileReducer;