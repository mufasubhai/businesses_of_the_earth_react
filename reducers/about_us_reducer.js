import {
    RECEIVE_ABOUT_US_DATA,

} from "../actions/data_actions"


const PostsReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ABOUT_US_DATA:
            return  action.aboutUs
        default:
            return state;
    }
}

export default PostsReducer;