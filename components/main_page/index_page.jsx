
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
            <div className="main_page_container">

                <Header/>
                
              {props.posts.map((post, idx) => {
                  return <PostThumb key={idx} post={post}/>
              })}

            </div>
        )
}

export default IndexPage;