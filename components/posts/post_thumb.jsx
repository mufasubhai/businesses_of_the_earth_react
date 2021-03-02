import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

export const PostThumb = ({post}) => {
    
        

    return (
        <Link to={`posts/${post.id}`} >

            <div className="post-thumb">
                <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
                <h3 className="post-title">{post.title.rendered.split('#038;').join('').split('&#8217;').join(`'`)}</h3>
                {/* <span>{parse(post.excerpt.rendered)}</span> */}
                
            </div>
        </Link>

    )
}