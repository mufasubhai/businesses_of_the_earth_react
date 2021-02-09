


// https://businessesoftheearth.org/wp-json/wp/v2/pages/129


import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../../header/header'

const FAQ = (props) => {
    // console.log(props);
    const [faq, setFaq] = useState(null);


        useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/pages/129`).then(response => {
                setFaq(response.data)
            }
            );
        }, [])

    
    
    return (
        <div>
           <Header/>
           {(!faq) ? null : 

           <span>
                {/* <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img> */}
            {/* <h3 className="post-title">{post.title.rendered}</h3> */}
            {/* <span>{parse(post.excerpt.rendered)}</span> */}
            <span>{parse(faq.content.rendered)}</span>
           </span>
           }
           {/* {console.log(post)} */}
            
        </div>
    )
}


export default FAQ;