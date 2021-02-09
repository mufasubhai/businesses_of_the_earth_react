import {
    RECEIVE_FAQ_DATA,
    RECEIVE_FAQ_ERRORS
} from "../actions/data_actions"


const PostsReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FAQ_DATA:
            return  action.faq
        default:
            return state;
    }
}

export default PostsReducer;