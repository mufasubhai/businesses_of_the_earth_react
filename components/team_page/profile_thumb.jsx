import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

export const ProfileThumb = ({profile}) => {
    
        

    return (
        

            <div className="profile-thumb">
                
                <img className="thumbnail-image" src={profile.image}></img>
                <h3 className="profile-title">{profile.title.rendered}</h3>
                <h3 className="profile-title">{profile.position}</h3>
                {/* <span>{parse(post.excerpt.rendered)}</span> */}
                
            </div>
        

    )
}