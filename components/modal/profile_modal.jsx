import React from 'react';
import {connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import parse from 'html-react-parser';


const ProfileModal = ({profile, closeModal}) => {
    
    
        return (
           
                <span> 
                    {

(profile) ?                <div className="modal_container">

                <span className="modal_top">
                <img className="thumbnail-image" src={profile.image}></img>
                <h3 className="profile-title">{profile.title.rendered}</h3>
                <h3 className="profile-title">{profile.position}</h3>
                <span className="no_reading_time">{parse(profile.excerpt.rendered)}</span>

                <div className="button-container">
                <button className="modal-button cancel" onClick={() => closeModal()}>Close</button>
                </div>
                </span>


                </div> : null
            }
                </span>
            
)
    
}



const mSTP = (state) => ({
    profile: state.entities.profile
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (element) => dispatch(openModal(element)),
})



export default connect(mSTP, mDTP)(ProfileModal);