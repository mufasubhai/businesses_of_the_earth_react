
import React, {useState, useEffect} from 'react';
import {PostThumb} from './post_thumb'
import Header from '../header/header'
// import TableContainer from '../table/table_container'

const IndexPage = props => {

useEffect(() => {
    props.fetchPosts()
    props.fetchProfiles()
}, [])    




    
    return (
            <div className="index-page-container">

                <Header/>

                <div className="index-page-header">
                    <h1>The Businesses,</h1>
                    
                    <h1> The Stories</h1>
                    <p>Empowering Small Businesses and Surrounging Communities through <span className="bold">You.</span></p>
                </div>
                
                <div className="post-index-list">
                    <div>
                        {props.posts.map((post, idx) => {
                            return <PostThumb key={idx} post={post}/>
                        })}

                    </div>

                </div>

            </div>
        )
}

export default IndexPage;