import React from 'react';
import { connect } from 'react-redux';

import HomePage from "./home_page.jsx";
import {fetchPost, fetchAboutUs, fetchProfile, fetchPosts, fetchProfiles, fetchFAQ, fetchMetric} from '../../actions/data_actions';
// import {fetchOTBSampleHistories} from '../../actions/otb_sample_history_actions';



const mSTP = state => ({
  profiles: Object.values(state.entities.profiles),
  posts: Object.values(state.entities.posts),
  metrics: state.entities.metric,
  FAQ: state.entities.faq,
  aboutUs: state.entities.aboutUs
});


const mDTP = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchProfiles: () => dispatch(fetchProfiles()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchFAQ: () => dispatch(fetchFAQ()),
  fetchMetric: () => dispatch(fetchMetric()),
  fetchAboutUs: () => dispatch(fetchAboutUs())
});




export default connect(mSTP, mDTP)(HomePage)