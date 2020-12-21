import * as APIUtil from '../util/api_util.js'

export const RECEIVE_ERRORS = 'RECEIVE_API_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_POSTS_DATA = "RECEIVE_POSTS_DATA";
export const RECEIVE_POST_DATA = "RECEIVE_POST_DATA";
export const RECEIVE_PROFILES_DATA = "RECEIVE_PROFILES_DATA";
export const RECEIVE_PROFILE_DATA = "RECEIVE_PROFILE_DATA";

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
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

const receivePostData = Post => ({
    type: RECEIVE_POST_DATA,
    Post
})

const receiveProfilesData = Profiles => {
    
 return {   type: RECEIVE_PROFILES_DATA,
    Profiles
     }
}

const receiveProfileData = Profile => ({
    type: RECEIVE_PROFILE_DATA,
    Profile
})

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPostsData()
        .then(Posts => (dispatch(receivePostsData(Posts))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const fetchPost = (id) => dispatch => (
    APIUtil.fetchPostData(id)
        .then(Post => (dispatch(receivePostData(Post))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const fetchProfiles = () => dispatch => (
    APIUtil.fetchProfilesData()
        .then(Profiles => (dispatch(receiveProfilesData(Profiles))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const fetchProfile = (id) => dispatch => (
    APIUtil.fetchProfileData(id)
        .then(Profile => (dispatch(receiveProfileData(Profile))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

