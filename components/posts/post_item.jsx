import React, {useState, useEffect} from 'react';
import Axios from 'axios';


const postItem = (props) => {

    const [post, setPost] = useState(null);

    useEffect(()=> {
        Axios.get(`https://businessesoftheearth.org/wp-json/wp/vd/posts/${postId}`).then(response => {
            setPost(response.data)
        }
        );
    }, [setPost])

    return (
        <div>
            POST ITEM
        </div>
    )
}


export default postItem;