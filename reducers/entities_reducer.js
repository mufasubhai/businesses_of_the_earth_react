import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import ProfilesReducer from './profile_reducer';
import FAQReducer from './faq_reducer';
import MetricReducer from './metric_reducer'
import SelectedProfileReducer from './selected_profile_reducer'
import AboutUsReducer from './about_us_reducer'
import currentPage from './current_page_reducer';
import lastPage from './last_page_reducer';
const entitiesReducer = combineReducers({
    posts: PostsReducer,
    profiles: ProfilesReducer,
    faq: FAQReducer,
    metric: MetricReducer,
    profile: SelectedProfileReducer,
    aboutUs: AboutUsReducer,
    currentPage,
    lastPage


});

export default entitiesReducer;