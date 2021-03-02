
import React, {useState, useEffect} from 'react';

import Header from '../header/header'
import Milestones from '../elements/milestones'
import Map from '../maps/map'
// import TableContainer from '../table/table_container'

const HomePage = props => {
    
    useEffect(() => {
        props.fetchPosts()
        props.fetchProfiles()
        props.fetchFAQ();
    }, [])    
    
    const [posts, setPosts] = useState([])

useEffect(() => {
    let newPosts = [];
    
    props.posts.forEach(post => {
        
        
        
        newPosts.push(post)
    
    })
    
    setPosts(newPosts)

}, [props.posts])








    return (
        <div className="home-page-container">

                <Header/>


            <div className="home-page-banner">
                
                <div>
                <div>

                <h1 className="home-page-header"><span className="bold">44%</span> of the USA's economic <br></br> activity comes from <span className="bold">Small Businesses.</span></h1>
                <p>Businesses of the earth is here to <span className="bold">share the stories</span> of hard working local businesses.</p>
                </div>
                </div>
                
            </div>

            <div className="home-page-body">
                <h2 className="home-page-body-header">WHO WE ARE AND WHAT WE STAND FOR</h2>
                <div>

                <p className="home-page-body-text">“Our mission is to <span className="bold">inspire people to support small businesses</span> so that consumers, job-seekers, entrepreneurs, and local communities can thrive. The way we do this is by <span className="bold"> showing local communities the stories of small business owners and providing discounts to inspire purchases.</span> We believe that if these small business owners could show customers, job-seekers, and other businesses <span className="bold">who they are, the struggles they overcame, and their dreams, then they would inspire much more support.</span> We hope that entrepreneurs, job-seekers, and surrounding communities can learn from these brick-and-mortar, mom-and-pop shops and support them along the way."</p>
                </div>


           

                <h2 className="home-page-body-header">OUR METRICS</h2>

                <ul className="pillar-list">

                    <li>
                        10,000 Impressions monthly across our Social Media Platforms (Instagram, Facebook, and Twitter)
                    </li>
                    <li>
                        1,100 Profile Views monthly across Social Media Platforms
                    </li>
                    <li>
                        600 unique website visitors in the past two months 
                    </li>
                    <li>
                        200 average reach per post about small business owners across social media platforms
                    </li>

                </ul>

                <h2 className="home-page-body-header">WHERE ARE THE SMALL BUSINESSES?</h2>
                
                {
                    (posts) ? 
                    <Map pins={posts}/>
                    : console.log(posts)
                }
            </div>  
            

            <Milestones/>
        </div>
        )
}

export default HomePage