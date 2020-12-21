import * as APIUTIL from '../util/api_util.js'

export const RECEIVE_API_ERRORS = 'RECEIVE_API_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_POSTS_DATA = "RECEIVE_POSTS_DATA";
export const RECEIVE_POST_DATA = "RECEIVE_POST_DATA";
export const RECEIVE_PROFILES_DATA = "RECEIVE_PROFILES_DATA";
export const RECEIVE_PROFILE_DATA = "RECEIVE_PROFILE_DATA";

const receiveErrors = errors => ({
    type: RECEIVE_API_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 

const receivePostsData = () => {
    
 return {   type: RECEIVE_POSTS_DATA,
    Posts
     }
}

const receivePostData = (postId) => ({
    type: RECEIVE_POST_DATA,
    Post
})

const receiveProfilesData = () => {
    
 return {   type: RECEIVE_PROFILES_DATA,
    Profiles
     }
}

const receiveProfileData = (profileId) => ({
    type: RECEIVE_PROFILE_DATA,
    Profile
})

export const fetchOTBSamples = () => dispatch => (
    OTBSampleAPIUtil.fetchOTBSamples()
        .then(OTBSamples => (dispatch(receiveOTBSamples(OTBSamples))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchOTBSample = id => dispatch => (
    OTBSampleAPIUtil.fetchOTBSample(id)
        .then(OTBSample => (dispatch(receiveAirTravel(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createOTBSample = OTBSample => dispatch => (
    OTBSampleAPIUtil.createOTBSample(OTBSample)
        .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateOTBSample = OTBSample => dispatch => (
    OTBSampleAPIUtil.updateOTBSample(OTBSample)
        .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteOTBSample = OTBSampleId => dispatch => (
    OTBSampleAPIUtil.deleteOTBSample(OTBSampleId)
        .then(() => dispatch(removeOTBSample(OTBSampleId)))
)