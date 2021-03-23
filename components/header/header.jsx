
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {PostThumb} from './post_thumb'
// import TableContainer from '../table/table_container'

const Header = props => {

    return (
            <div id="header-container">
                <p className="logo-top">Businesses of the Earth</p>
                        <ul className="header-link-list">
                            <Link to='/' className="header-link">Home</Link>
                            <Link to='/team'className="header-link">Our Team</Link>
                            <Link to='/posts'className="header-link">Local Business</Link>
                            <Link to='/faq'className="header-link">FAQ</Link>
                        </ul>              
            </div>
        )
}

export default Header