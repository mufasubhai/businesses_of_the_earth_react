import React from 'react';
import { connect } from 'react-redux';

import HomePage from "./home_page.jsx";
import {fetchPost, fetchProfile, fetchPosts, fetchProfiles, fetchFAQ} from '../../actions/data_actions';
// import {fetchOTBSampleHistories} from '../../actions/otb_sample_history_actions';



const mSTP = state => ({
  profiles: Object.values(state.entities.profiles),
  posts: Object.values(state.entities.posts)
});


const mDTP = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchProfiles: () => dispatch(fetchProfiles()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchFAQ: () => dispatch(fetchFAQ())
});




export default connect(mSTP, mDTP)(HomePage)