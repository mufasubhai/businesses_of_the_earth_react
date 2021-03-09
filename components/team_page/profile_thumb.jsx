import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {closeModal, openModal} from '../../actions/modal_actions';
import {setCurrentProfile} from '../../actions/data_actions';


const ProfileThumb = ({openModal, closeModal, profile, setCurrentProfile}) => {
    
    const openProfile = (profile) => {
        setCurrentProfile(profile)
        openModal('profile_modal')
    }

    return (
        

            <div onClick={() => openProfile(profile)} className="profile-thumb">
                
                <img className="thumbnail-image" src={profile.image}></img>
                <h3 className="profile-title">{profile.title.rendered}</h3>
                <h3 className="profile-title">{profile.position}</h3>
                
                
            </div>
        

    )
}


const mSTP = (state) => ({
    

})

const mDTP = dispatch => ({
    setCurrentProfile: (profile) => dispatch(setCurrentProfile(profile)),
    closeModal: () => dispatch(closeModal()),
    openModal: (element) => dispatch(openModal(element)),

})



export default connect(mSTP, mDTP)(ProfileThumb);