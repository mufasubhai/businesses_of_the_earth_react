import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../header/header'
import Map from '../maps/map'
import Authors from '../../assets/variables/authors'

const postItem = (props) => {
    
    const [post, setPost] = useState(null);
    let images = null;
// const images = document.getElementsByClassName('wp-block-image');

    const stripWidth = string => {
        return string.split(/width="[^"]+"/).join('').split(/height="[^"]+"/).join('').split(/sizes="[^"]+"/).join('');
    }


    if (!props.posts.filter(el => el.id === parseInt(props.match.params.postId))[0]) {
        
        useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/posts/${props.match.params.postId}`).then(response => {
                setPost(response.data)
            }
            );
        }, [setPost])

    } else {
        useEffect(()=> {
        
            setPost(props.posts.filter(el => el.id === parseInt(props.match.params.postId))[0])
            
        }, [setPost])
    }

    useEffect(()=> {
        images = [...document.getElementsByClassName('wp-block-image')];
        images.forEach(image => {
            let class1 = image.firstChild.classList[0];
            let class2 = image.firstChild.classList[1];
        

            
        
            image.classList.add(class1, class2)
            
        
        })
        
    }, [post, images])

    
    return (
        <div>
            <script>
                
                
            </script>
           <Header/>
           {(!post) ? null : 

           <div className="post-wrapper">
               <div className="post-top">
                   <div className="width-wrapper">
                    <img className="post-header-image" src={post.jetpack_featured_media_url}></img>
                    <div className="post-header-text">

                    <h3 className="post-title">{post.title.rendered.split('#038;').join('').split('&#8217;').join(`'`)}</h3>
                    
                    <h2 className="author">{Authors[post.author]}</h2>
                    </div>
                    </div>
               </div>

            <div className="post-excerpt">{parse(post.excerpt.rendered)}</div>
            <div className="post-content">{parse(stripWidth(post.content.rendered))}</div>
            
            
            
           <Map/>
           </div>

           }
    
            
        </div>
    )
}


export default postItem;