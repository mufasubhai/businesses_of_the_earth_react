
import React, {useState, useEffect} from 'react';
import {PostThumb} from './post_thumb';
import Header from '../header/header'
import Milestones from '../elements/milestones'
// import TableContainer from '../table/table_container'

const HomePage = props => {

useEffect(() => {
    props.fetchPosts()
    props.fetchProfiles()
}, [])    


    return (
        <div className="main_page_container">
                <Header/>
            <div className="main-page-banner">
                <h1><div className="bold">44%</div>of the USA's economic activity comes from <div className="bold">Small Businesses.</div></h1>
                <p>Businesses of the earth is here to <div className="bold">share the stories</div> of hard working local businesses.</p>
            </div>

            <div className="main-page-body">
                <h2 className="main-page-body-header"><span className="bold">WhO WE ARE AND WHAT WE STAND FOR</span></h2>
                <p className="main-page-body-text">
                    “Our mission is to <span className="bold">inspire people to support small businesses</span> so that consumers, job-seekers, entrepreneurs, and local communities can thrive. The way we do this is by <span clssName="bold"> showing local communities the stories of small business owners and providing discounts to inspire purchases.</span> We believe that if these small business owners could show customers, job-seekers, and other businesses <span className="bold">who they are, the struggles they overcame, and their dreams, then they would inspire much more support.</span> We hope that entrepreneurs, job-seekers, and surrounding communities can learn from these brick-and-mortar, mom-and-pop shops and support them along the way.

                </p>

                <h2 className="main-page-body-heder">OUR PILLARS OF VALUE</h2>

                <ul className="pillar-list">
                    <label className="pillar-title">Inclusivity
                        <img className="pillar-image" alt="inclusivity"></img>
                    </label>
                    <label className="pillar-title">Support
                        <img className="pillar-image" alt="Support"></img>
                    </label>
                    <label className="pillar-title">Community
                        <img className="pillar-image" alt="community"></img>
                    </label>
                    
                </ul>
            </div>

            <Milestones/>
        </div>
        )
}

export default HomePage