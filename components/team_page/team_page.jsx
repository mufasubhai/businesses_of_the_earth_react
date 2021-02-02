import React from 'react';
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



const TeamPage = props => {
    return (
        <div className="team-page-wrapper">
            <Header/>

            <div className="team-top">
            <h1>Meet the team!</h1>

            <p>As of December 2020, we are a growing team of 10 people, including Website Developers, Social Media Content Creators, Professional Writers, Graphic Designers, and a Leadership team!</p>

            </div>

            <div className="ceo-profile">
                    <div className="profile-photo-wrapper">
                        <img src={daniel} className="profile-photo" alt="daniel-profile"/>
                    </div>
                <div>
                    <div className="team-member-details">
                        <p className="team-member-detail">Daniel Shaby</p>
                        <p className="team-member-detail">Founder/CEO</p>
                    </div>
                </div>
            </div>

            <div className="team-team">
                <ul className="team-list">

                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={nicole} className="profile-photo" alt="nicole-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Nicole Giles</p>
                            <p className="team-member-detail">Team Leader</p>
                        </div>
                    </li>
                     <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={isabelle} className="profile-photo" alt="isabelle-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Isabelle Rubio</p>
                            <p className="team-member-detail">Team Leader</p>
                        </div>
                    </li>
                  
                   
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={sierra} className="profile-photo" alt="sierra-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Sierra DeWalt</p>
                            <p className="team-member-detail">Content Creator</p>
                        </div>
                    </li>
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={adrian} className="profile-photo" alt="adrian-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Adrian Apodaca</p>
                            <p className="team-member-detail">Web Developer</p>
                        </div>
                    </li>
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={brian} className="profile-photo" alt="brian-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Brian Anderson</p>
                            <p className="team-member-detail">Professional Writer</p>
                        </div>
                    </li>
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                            <img src={mina} className="profile-photo" alt="mina-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Mina Tahmouresie</p>
                            <p className="team-member-detail">Graphic Designer</p>
                         
                        </div>
                    </li>
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                        <img src={donna} className="profile-photo" alt="donna-profile"/>
                        </div>
                        <div className="team-member-details">
                               <p className="team-member-detail">Donna Ghassemi</p>
                            <p className="team-member-detail">Content Creator</p>
                            
                        </div>
                    </li>
                    <li className="team-member-item">
                        <div className="profile-photo-wrapper">
                        <img src={natalie} className="profile-photo" alt="natalie-profile"/>
                        </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Natalie Deleon</p>
                            <p className="team-member-detail">Market Researcher</p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <div className="profile-photo-wrapper">
                            <img src={melina} className="profile-photo" alt="melina-profile"/>
                            </div>
                        <div className="team-member-details">
                            <p className="team-member-detail">Melina Gilbert</p>
                            <p className="team-member-detail">Social Media Strategy</p>
                        </div>
                    </li>
                  
                    
                    
                </ul>
            </div>

        </div>
    )
}

const mSTP = state => ({})
const mDTP = dispatch => ({})

export default connect(mSTP, mDTP)(TeamPage);