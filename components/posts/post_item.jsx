import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';


const postItem = (props) => {
    console.log(props);
    const [post, setPost] = useState(null);

    useEffect(()=> {
        Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/posts/${props.match.params.postId}`).then(response => {
            setPost(response.data)
        }
        );
    }, [setPost])


    
    return (
        <div>
           {!post ? null :parse(post.content.rendered) }
            
        </div>
    )
}


export default postItem;