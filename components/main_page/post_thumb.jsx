import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

export const PostThumb = ({post}) => {

    return (
        <span>
            <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
            <h3 className="post-title">{post.title.rendered}</h3>
            <p>{parse(post.excerpt.rendered)}</p>

        </span>

    )
}