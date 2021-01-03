import {
    RECEIVE_POSTS_DATA,
    RECEIVE_POST_DATA
} from "../actions/data_actions"


const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS_DATA:
            return Object.assign({}, state, action.posts)
        case RECEIVE_POST_DATA:
            return Object.assign({}, state, { [action.post.id]: action.post})
        default:
            return state;
    }
}

export default PostsReducer;