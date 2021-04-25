
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/white-logo-BOTE.png'
// import {PostThumb} from './post_thumb'
// import TableContainer from '../table/table_container'

const Header = props => {

    return (
            <div id="header-container">
                        <ul className="header-link-list">
                            <Link to='/'>
                            <img src={Logo} alt="Businesses of the Earth Logo"className="logo-top"/>
                            </Link>
                            <Link to='/' className="header-link">Home</Link>
                            <Link to='/team'className="header-link">Our Team</Link>
                            <Link to='/posts'className="header-link">Local Businesses</Link>
                            <Link to='/faq'className="header-link">FAQ</Link>
                        </ul>              
            </div>
        )
}

export default Header