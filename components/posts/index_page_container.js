import React from 'react';
import { connect } from 'react-redux';
import IndexPage from "./index_page.jsx";
import {
  fetchPost, 
  fetchProfile, 
  fetchPosts, 
  fetchProfiles, 
  fetchPostsTag,
  fetchFirstPostsTag, 
  currentPageReset, 
  setCurrentPage,
  fetchFirstPosts

} from '../../actions/data_actions';


const mSTP = state => ({
  profiles: Object.values(state.entities.profiles),
  posts: Object.values(state.entities.posts),
  currentPage: state.entities.currentPage,

  lastPage: state.entities.lastPage
});

const mDTP = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchProfiles: () => dispatch(fetchProfiles()),
  fetchPosts: (page) => dispatch(fetchPosts(page)),
  fetchPostsTag: (tag, page) => dispatch(fetchPostsTag(tag, page)),
  currentPageReset: () => dispatch(currentPageReset()),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  fetchFirstPostsTag: (category, page) => dispatch(fetchFirstPostsTag(category, page)),
  fetchFirstPosts: (page) => dispatch(fetchFirstPosts(page))
});

export default connect(mSTP, mDTP)(IndexPage)