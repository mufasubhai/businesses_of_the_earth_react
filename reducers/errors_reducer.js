import { combineReducers } from 'redux';
import ProfileErrorsReducer from './profile_errors_reducer';
import PostErrorsReducer from './post_errors_reducer'

const errorsReducer = combineReducers({
    ProfileErrors: ProfileErrorsReducer,
    PostErrors: PostErrorsReducer

});

export default errorsReducer;