
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {PostThumb} from './post_thumb'
// import TableContainer from '../table/table_container'

const Header = props => {

    return (
            <div id="header-container">
                <img src={'../../assets/images/white-logo-BOTE.png'} alt="Businesses of the Earth Logo"className="logo-top"/>
                        <ul className="header-link-list">
                            <Link to='/' className="header-link">Home</Link>
                            <Link to='/team'className="header-link">Our Team</Link>
                            <Link to='/posts'className="header-link">Local Businesses</Link>
                            <Link to='/faq'className="header-link">FAQ</Link>
                        </ul>              
            </div>
        )
}

export default Header