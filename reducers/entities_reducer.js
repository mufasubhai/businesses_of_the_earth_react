import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import ProfilesReducer from './profiles_reducer';


const entitiesReducer = combineReducers({
    posts: PostsReducer,
    profiles: ProfilesReducer
});

export default entitiesReducer;