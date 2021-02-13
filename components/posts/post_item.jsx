import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../header/header'

const postItem = (props) => {
    // console.log(props);
    const [post, setPost] = useState(null);
    let images = null;
// const images = document.getElementsByClassName('wp-block-image');

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

    useEffect(()=> {
        images = [...document.getElementsByClassName('wp-block-image')];
        images.forEach(image => {
            let class1 = image.firstChild.classList[0];
            let class2 = image.firstChild.classList[1];
        //     let class2 = image.firstChild.classList[1];

            console.log(class1)
        //     // console.log(class2)
            image.classList.add(class1, class2)
            console.log(image.classList)
        // //     console.log(image.classList)
        })
        
        console.log(images)
    }, [post, images])

    
    return (
        <div>
            <script>
                
                document.
            </script>
           <Header/>
           {(!post) ? null : 

           <div className="post-wrapper">
               <div className="post-top">
                    <img className="post-header-image" src={post.jetpack_featured_media_url}></img>
                    <h3 className="post-title">{post.title.rendered.split('#038;').join('').split('&#8217;').join(`'`)}</h3>
               </div>

            <div className="post-excerpt">{parse(post.excerpt.rendered)}</div>
            <div className="post-content">{parse(post.content.rendered)}</div>
           </div>
           }
           {console.log(post)}
           {/* {  */}
            {/* //   images? console.log(images) : null} */}
            
           {/* { (!images) ? console.log(images) : null} */}
            
        </div>
    )
}


export default postItem;