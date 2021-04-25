import {
    LAST_PAGE_TRUE,
    LAST_PAGE_FALSE
} from "../actions/data_actions"


const LastPageReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LAST_PAGE_TRUE:
            // return Object.assign({}, state, action.posts)
            return true
            // add new 
        case LAST_PAGE_FALSE:
            return false
        default:
            return state;
    }
}

export default LastPageReducer;