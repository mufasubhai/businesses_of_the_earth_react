import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../header/header'

const postItem = (props) => {
    // console.log(props);
    const [post, setPost] = useState(null);


    if (!props.posts.filter(el => el.id === parseInt(props.match.params.postId))[0]) {
        console.log('axios')
        useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/posts/${props.match.params.postId}`).then(response => {
                setPost(response.data)
            }
            );
        }, [setPost])

    } else {
        useEffect(()=> {
            console.log('prev-state')
            setPost(props.posts.filter(el => el.id === parseInt(props.match.params.postId))[0])

        }, [setPost])
    }

    
    return (
        <div>
           <Header/>
           {(!post) ? null : 

           <span>
                <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img>
            <h3 className="post-title">{post.title.rendered}</h3>
            <span>{parse(post.excerpt.rendered)}</span>
            <span>{parse(post.content.rendered)}</span>
           </span>
           }
           {console.log(post)}
            
        </div>
    )
}


export default postItem;