import * as APIUtil from '../util/api_util.js'

export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_POSTS_DATA = "RECEIVE_POSTS_DATA";
export const RECEIVE_POST_DATA = "RECEIVE_POST_DATA";
export const RECEIVE_PROFILES_DATA = "RECEIVE_PROFILES_DATA";
export const RECEIVE_PROFILE_DATA = "RECEIVE_PROFILE_DATA";
export const RECEIVE_FAQ_DATA = "RECEIVE_FAQ_DATA";
export const RECEIVE_FAQ_ERRORS = "RECEIVE_FAQ_ERRORS";
export const RECEIVE_METRIC_DATA = "RECEIVE_METRIC_DATA";
export const RECEIVE_METRIC_ERRORS = "RECEIVE_METRIC_ERRORS";
export const RECEIVE_ABOUT_US_ERRORS = "RECEIVE_ABOUT_US_ERRORS";
export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE"
export const RECEIVE_ABOUT_US_DATA = "RECEIVE_ABOUT_US_DATA"

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

const receiveProfileErrors = errors => ({
    type: RECEIVE_PROFILE_ERRORS,
    errors
})

const receiveFAQErrors = errors => ({
    type: RECEIVE_FAQ_ERRORS,
    errors
})

const receiveMetricErrors = errors => ({
    type: RECEIVE_FAQ_ERRORS,
    errors
})
const receiveAboutUsErrors = errors => ({
    type: RECEIVE_ABOUT_US_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 

const receivePostsData = (posts) => {   
 return {   type: RECEIVE_POSTS_DATA,
    posts
     }
}

const receivePostData = post => ({
    type: RECEIVE_POST_DATA,
    post
})

const receiveProfilesData = profiles => {
    
 return {   type: RECEIVE_PROFILES_DATA,
    profiles
     }
}

const receiveProfileData = profile => ({
    type: RECEIVE_PROFILE_DATA,
    profile
})

const receiveFAQData = faq => ({
    type: RECEIVE_FAQ_DATA,
    faq
}) 

const receiveAboutUsData = aboutUs => ({
    type: RECEIVE_ABOUT_US_DATA,
    aboutUs
})

export const fetchFAQ = () => dispatch => (
    APIUtil.fetchFAQ()
        .then(FAQ => (dispatch(receiveFAQData(FAQ))),
        err => (
            dispatch(receiveFAQErrors(err.responseJSON))
        )
))

const receiveMetricData = metric => ({
    type: RECEIVE_METRIC_DATA,
    metric
}) 


export const fetchMetric = () => dispatch => (
    APIUtil.fetchMetric()
        .then(FAQ => (dispatch(receiveMetricData(FAQ))),
        err => (
            dispatch(receiveMetricErrors(err.responseJSON))
        )
))

export const fetchAboutUs = () => dispatch => (
    APIUtil.fetchAboutUs()
        .then(aboutUs => (dispatch(receiveAboutUsData(aboutUs))),
        err => (
            dispatch(receiveAboutUsErrors(err.responseJSON))
        )
))

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPostsData()
        .then(Posts => (dispatch(receivePostsData(Posts))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        ))
)

export const fetchPostsTag = (tag) => dispatch => (
    APIUtil.fetchCategoryPosts(tag)
        .then(Posts => (dispatch(receivePostsData(Posts))
        ), err => (
            dispatch(receivePostErrors(err.responseJson))
        ))

)
export const fetchPost = (id) => dispatch => (
    APIUtil.fetchPostData(id)
        .then(Post => (dispatch(receivePostData(Post))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        ))
)
export const fetchProfiles = () => dispatch => (
    APIUtil.fetchProfilesData()
        .then(Profiles => (dispatch(receiveProfilesData(Profiles))
        ), err => (
            dispatch(receiveProfileErrors(err.responseJSON))
        ))
)
export const fetchProfile = (id) => dispatch => (
    APIUtil.fetchProfileData(id)
        .then(Profile => (dispatch(receiveProfileData(Profile))
        ), err => (
            dispatch(receiveProfileErrors(err.responseJSON))
        ))
)

export const setCurrentProfile = (profile) => {
    return {
        type: SET_CURRENT_PROFILE,
        profile: profile
    }
}