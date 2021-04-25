import {
    RECEIVE_CURRENT_PAGE,
    RESET_CURRENT_PAGE
} from "../actions/data_actions"


const CurrentPageReducer = (state = 1, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_PAGE:
            // return Object.assign({}, state, action.posts)
            return action.currentPage
            // add new 
        case RESET_CURRENT_PAGE:
            return 1
        default:
            return state;
    }
}

export default CurrentPageReducer;