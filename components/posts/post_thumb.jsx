import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

export const PostThumb = ({post}) => {
    // const cloneDeep = require('lodash.clonedeep')
    // const trimmedText  = textObject => {
    //     let newObject = cloneDeep(textObject);
    //     console.log(newObject)

       
    //     let text = Array.from(newObject[0].props.children)
            
    //     // let newText = text.split("").splice(0, 200)

    //     // console.log(text);
    //     // console.log(typeof text);
    //     // console.log(typeof Array.from(text))

    //         // if (newText.length >= 200) {
    //         //     newText = newText.push("...")
    //         // }

    //         // let newSentence = ""
    //         // newText.forEach(char => {
    //         //     newSentence += char;
    //         // })

    //         // newObject[0].props.children = newSentence;
            
    //         // return [newObject, ""]
    //         }
        
        

    return (
        <Link to={`posts/${post.id}`} postContent={post}>

            <div className="post-thumb">
                <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
                <h3 className="post-title">{post.title.rendered}</h3>
                {/* <span>{parse(post.excerpt.rendered)}</span> */}
                
            </div>
        </Link>

    )
}