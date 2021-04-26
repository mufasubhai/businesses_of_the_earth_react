import {
    RECEIVE_POSTS_DATA,
    RECEIVE_POST_DATA,
    RECEIVE_NEW_POSTS_DATA
} from "../actions/data_actions"


const PostsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = [...state]
    switch (action.type) {
        case RECEIVE_POSTS_DATA:
            console.log(state)
            console.log(action.posts)
            console.log(newState.concat(action.posts))
            return newState.concat(action.posts)
          
        case RECEIVE_NEW_POSTS_DATA:
            return action.posts
        case RECEIVE_POST_DATA:
            return Object.assign({}, state, { [action.post.id]: action.post})
        default:
            return state;
    }
}

export default PostsReducer;