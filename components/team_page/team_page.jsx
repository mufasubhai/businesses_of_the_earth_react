import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import adrian from '../../assets/images/profile-photos/adrian-profile.png';
import brian from '../../assets/images/profile-photos/brian-profile.png';
import daniel from '../../assets/images/profile-photos/daniel-profile.png';
import donna from '../../assets/images/profile-photos/donna-profile.png';
import isabelle from '../../assets/images/profile-photos/isabelle-profile.png';
import melina from '../../assets/images/profile-photos/melina-profile.png';
import mina from '../../assets/images/profile-photos/mina-profile.png';
import natalie from '../../assets/images/profile-photos/natalie-profile.jpg';
import nicki from '../../assets/images/profile-photos/nicki-profile.jpg';
import sierra from '../../assets/images/profile-photos/sierra-profile.png';



const TeamPage = props => {
    return (
        <div className="team-page-wrapper">
            <Header/>

            <div className="team-top"></div>

            <div className="ceo-profile">
                <img src={daniel} className="profile-photo" alt="daniel-profile"/>
            </div>

            <div className="team-team">
                <ul className="team-list">

                    <li className="team-member-item">
                        <img src={nicole} className="profile-photo" alt="nicole-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                     <li className="team-member-item">
                        <img src={isabelle} className="profile-photo" alt="isabelle-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                        <img src={melina} className="profile-photo" alt="melina-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                   
                    <li className="team-member-item">
                            <img src={sierra} className="profile-photo" alt="sierra-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={adrian} className="profile-photo" alt="adrian-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={brian} className="profile-photo" alt="brian-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={mina} className="profile-photo" alt="mina-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={donna} className="profile-photo" alt="donna-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={natalie} className="profile-photo" alt="natalie-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
                        </div>
                    </li>
                    <li className="team-member-item">
                            <img src={melina} className="profile-photo" alt="melina-profile"/>
                        <div className="team-member-item">
                            <p className="team-member-detail"></p>
                            <p className="team-member-detail"></p>
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