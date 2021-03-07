import React from 'react';
import { connect } from 'react-redux';
import TeamPage from "./team_page";
import {fetchPost, fetchProfile, fetchPosts, fetchProfiles, fetchPostsTag} from '../../actions/data_actions';

const mSTP = state => ({
  profiles: Object.values(state.entities.profiles),
  posts: Object.values(state.entities.posts)
});

const mDTP = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchProfiles: () => dispatch(fetchProfiles()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPostsTag: (tag) => dispatch(fetchPostsTag(tag))

});

export default connect(mSTP, mDTP)(TeamPage)