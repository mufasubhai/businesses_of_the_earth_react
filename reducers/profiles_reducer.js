import {
    RECEIVE_PROFILES_DATA,
    RECEIVE_PROFILE_DATA
} from "../actions/data_actions"

// const compositeID = (OTBSampleHistory) => (
    
// )
// may need composite function for RECEIVE_OTB_SAMPLE_HISTORY Action

const ProfilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILES_DATA:
            return Object.assign({}, state, action.profiles)
        case RECEIVE_PROFILE_DATA:
            return Object.assign({}, state, { [action.profile.id]: action.profile})
       
        default:
            return state;
    }
}

export default ProfilesReducer;