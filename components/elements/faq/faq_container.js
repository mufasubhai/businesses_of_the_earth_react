import React from 'react';
import {connect } from 'react-redux';
import FAQ from './faq';

const mSTP = state => ({
    faq: state.entities.faq
})

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(FAQ);