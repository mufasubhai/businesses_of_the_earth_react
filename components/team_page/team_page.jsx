import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import adrian from '../../assets/images/adrian-profile.png';
import brian from '../../assets/images/brian-profile.png';
import daniel from '../../assets/images/daniel-profile.png';
import donna from '../../assets/images/donna-profile.png';
import isabelle from '../../assets/images/isabelle-profile.png';
import melina from '../../assets/images/melina-profile.png';
import mina from '../../assets/images/mina-profile.png';
import natalie from '../../assets/images/natalie-profile.jpg';
import nicole from '../../assets/images/nicki-profile.jpg';
import sierra from '../../assets/images/sierra-profile.png';

import { ProfileThumb } from './profile_thumb'

const TeamPage = props => {
    
    useEffect(() => {
        props.fetchProfiles();
    }, [])


    return (
        <div className="team-page-wrapper">
            <Header/>
            

            <div className="team-top">
            <h1>Meet the team!</h1>

            <p>As of December 2020, we are a growing team of 10 people, including Website Developers, Social Media Content Creators, Professional Writers, Graphic Designers, and a Leadership team!</p>


            </div>
    
            {
                props.profiles.sort((a,b) => {
          
                    return a.order - b.order}).map((profile, idx) => {
                    return <ProfileThumb key={idx} profile={profile}/>
                })
            }

            {/* <div className="ceo-profile">
                    <div className="profile-photo-wrapper">
                        <img src={daniel} className="profile-photo" alt="daniel-profile"/>
                    </div>
                
                    <div className="team-member-details">
                        <p className="team-member-detail">Daniel Shaby</p>
                        <p className="team-member-detail">Founder/CEO</p>
                    </div>
                
            </div>


                <ul className="team-list">

                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={nicole} className="profile-photo" alt="nicole-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Nicole Giles</p>
                            <p className="team-member-detail">Team Leader</p>
                        </div>
                        <div className="profile-photo-wrapper">
                            <img src={isabelle} className="profile-photo" alt="isabelle-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Isabelle Rubio</p>
                            <p className="team-member-detail">Team Leader</p>
                        </div>
                    </li> */}
                     
                    
                  
                   
        


        </div>
    )
}

const mSTP = state => ({})
const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(TeamPage);