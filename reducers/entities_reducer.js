import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import ProfilesReducer from './profile_reducer';


const entitiesReducer = combineReducers({
    posts: PostsReducer,
    profiles: ProfilesReducer
});

export default entitiesReducer;