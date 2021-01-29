
import React, {useState, useEffect} from 'react';
// import {PostThumb} from './post_thumb'
// import TableContainer from '../table/table_container'

const Header = props => {




    
    return (
            <div className="header-container">
                <p className="logo-top">Logo</p>
                        <ul className="header-link-list">
                            <li className="header-link"><a href="#">Home</a></li>
                            <li className="header-link"><a href="#">Our Team</a></li>
                            <li className="header-link"><a href="#">Local Businesss</a></li>
                            <li className="header-link"><a href="#">FAQ</a></li>
                        </ul>              
            </div>
        )
}

export default Header