import { combineReducers } from 'redux';
import ProfileErrorsReducer from './profile_errors_reducer';
import PostErrorsReducer from './post_errors_reducer'
import faqErrorsReducer from './faq_errors_reducer'

const errorsReducer = combineReducers({
    profileErrors: ProfileErrorsReducer,
    postErrors: PostErrorsReducer,
    faqErrors: faqErrorsReducer

});

export default errorsReducer;