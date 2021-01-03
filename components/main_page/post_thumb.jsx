import React from 'react';

export const PostThumb = ({post}) => {

    return (
        <span>
            <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
            <h3 className="post-title">{post.title.rendered}</h3>
            <p>{post.excerpt.rendered}</p>
        </span>

    )
}