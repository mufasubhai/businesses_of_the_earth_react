
import React, {useState, useEffect} from 'react';
import {PostThumb} from './post_thumb';
import Header from '../header/header'
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
                <h1><h1 className="bold">44%</h1>of the USA's economic activity comes from <h1 className="bold">Small Businesses.</h1></h1>
                <p>Businesses of the earth is here to <p className="bold">share the stories</p> of hard working local businesses.</p>
            </div>

            <div>

            </div>

            </div>
        )
}

export default HomePage