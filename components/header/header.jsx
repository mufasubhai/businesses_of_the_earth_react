
import React, {useState, useEffect} from 'react';
// import {PostThumb} from './post_thumb'
// import TableContainer from '../table/table_container'

const Header = props => {

    return (
            <div className="header-container">
                <p className="logo-top">Logo</p>
                        <ul className="header-link-list">
                            <li className="header-link">Home</li>
                            <li className="header-link">Our Team</li>
                            <li className="header-link">Local Business</li>
                            <li className="header-link">FAQ</li>
                        </ul>              
            </div>
        )
}

export default Header