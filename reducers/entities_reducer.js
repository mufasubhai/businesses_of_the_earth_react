import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import ProfilesReducer from './profiles_reducer';


const entitiesReducer = combineReducers({
    Posts: PostsReducer,
    Profiles: ProfilesReducer
});

export default entitiesReducer;