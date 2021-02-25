


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

    



    if (!props.faq) {
        console.log('axios')
       useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/pages/129`).then(response => {
                setFaq(response.data)
            }
            );
        }, [])
    } else {
        useEffect(()=> {
            
            setFaq(props.faq)

        }, [])
    }

    
    return (
        <div className="faq-body">
           <Header/>

            <div className="faq-wrapper-top">

           <h1>Frequently Asked Questions</h1>
            </div>
           {(!faq) ? null : 

           <div className='faq-wrapper'>
               
                

                        {/* <img className="thumbnail-image" src={post.jetpack_featured_media_url}></img> */}
                    {/* <h3 className="post-title">{post.title.rendered}</h3> */}
                    {/* <span>{parse(post.excerpt.rendered)}</span> */}
                    <span className="faq-question">
                        <span>{parse(faq.content.rendered)}
                            </span>
                            </span>
                
               
           </div>
           }
           {/* {console.log(post)} */}
            
        </div>
    )
}


export default FAQ;