import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import ProfileThumb from './profile_thumb'

const TeamPage = props => {
    
    let ceoprofile = [...props.profiles.filter((profile) => (profile.order === '0'))]
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
                ceoprofile.map((CEOProfile, idx) => {
                    return <div className="ceo-profile">
                            
                         <ProfileThumb key={idx} profile={CEOProfile}/>

                      
                    </div>
                })

            }
            
            <div className="team-member-wrapper">

            
            {
                props.profiles.filter(el => el.order != 0).sort((a,b) => {
          
                    return a.order - b.order}).map((profile, idx) => {
                    return<li key={idx} className="team-member-item">
                         <ProfileThumb key={idx} profile={profile}/>

                     </li> 
                })
            }

            </div>


{/* 
                <ul className="team-list">

                   
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
                    </li>
                     
                    
                   */}
                   
        


        </div>
    )
}

const mSTP = state => ({})
const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(TeamPage);