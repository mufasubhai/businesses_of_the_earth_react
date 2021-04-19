import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import ProfilesReducer from './profile_reducer';
import FAQReducer from './faq_reducer';
import MetricReducer from './metric_reducer'
import SelectedProfileReducer from './selected_profile_reducer'
import AboutUsReducer from './about_us_reducer'
const entitiesReducer = combineReducers({
    posts: PostsReducer,
    profiles: ProfilesReducer,
    faq: FAQReducer,
    metric: MetricReducer,
    profile: SelectedProfileReducer,
    aboutUs: AboutUsReducer

});

export default entitiesReducer;