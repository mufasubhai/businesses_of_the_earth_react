import React from 'react';
import {connect } from 'react-redux';
import PostItem from './post_item';

const mSTP = state => ({
    posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(PostItem);