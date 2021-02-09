import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import ProfilesReducer from './profile_reducer';
import FAQReducer from './faq_reducer';


const entitiesReducer = combineReducers({
    posts: PostsReducer,
    profiles: ProfilesReducer,
    faq: FAQReducer
});

export default entitiesReducer;