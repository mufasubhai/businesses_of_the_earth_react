import React from 'react';
import {connect} from 'react-redux';

const mSTP = state => ({});
const mDTP = dispatch => ({});


const Milestones = props => {


    return (
        <div className="milestone-wrapper">
            <h1 className="milestone-header">HOW FAR WE'VE COME!</h1>
            <div className="milestone-graphic"></div>

        </div>
    )
}

export default connect(mSTP, mDTP)(Milestones)