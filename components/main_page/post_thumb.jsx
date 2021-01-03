import React from 'react';

export const PostThumb = ({post}) => {

    return (
        <span>
            <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
            <h1 className="post-title">{post.title.rendered}</h1>
            <p>{post.excerpt.rendered}</p>
        </span>

    )
}