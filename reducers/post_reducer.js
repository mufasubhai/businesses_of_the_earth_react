import {
    RECEIVE_POSTS_DATA,
    RECEIVE_POST_DATA,
    RECEIVE_NEW_POSTS_DATA
} from "../actions/data_actions"


const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS_DATA:
            return Object.assign({}, state, action.posts)
            // return action.posts
            // add new 
        case RECEIVE_NEW_POSTS_DATA:
            return actiion.posts
        case RECEIVE_POSTS_DATA:
            return Object.assign({}, state, { [action.post.id]: action.post})
        default:
            return state;
    }
}

export default PostsReducer;