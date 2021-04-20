import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../header/header'
import Map from '../maps/map'
import Authors from '../../assets/variables/authors'

const postItem = (props) => {
    
    const COMMENT_URL = "https://businessesoftheearth.org/wp-json/wp/v2/comments"
    const [post, setPost] = useState(null);
    let images = null;


    const [commentName, setCommentName] = useState('')
    const [commentEmail, setCommentEmail] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(null)

    useEffect(() => {
        if (post) {

            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/comments?post=${post.id}`).then(res => {
                console.log(res)
                setComments(res)
            }).then(() =>  console.log(comments))

        }
    }, [post])
    const dateFormat = (date) => {
    let dateString = (new Date(Date.parse(date))).toString()
    
        let dateArray = dateString.split(' ')
        return dateArray.splice(0, 5).join(' ')
        return dateArray.join(" ")
    }
    
    const submitComment = (event) => {
        event.preventDefault()
        let data = {
            post: post.id,
            author_name: commentName,
            author_email: commentEmail,
            content: comment
        }
        Axios.post(COMMENT_URL, data, {
             headers: {
      'Content-Type': 'application/json',
    }
        } ).then(res => {
            if (res.ok === true) {
                console.log('success')
            }
            console.log(res)
            // return res.json()
        }).catch(error => console.error('Error:', error))


    }


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
            
            
            
           <Map pins={[post]}/>
           </div>

           }
            <div className="post-wrapper">
              <h1 className="comment-header">Comments</h1>
            {(comments) ? 
                    comments.data.map((comment, idx)=> {
            
                        return <div className="comment-wrapper" key={idx}>
                            <img className="comment-avatar" alt={`${comment.author_name} avatar`} src={comment.author_avatar_urls["48"]}>
                            </img>
                            <div className="comment-right-wrapper">

                            <span className="comment-top-right">
                                    <p className="comment-author">{comment.author_name} </p>
                                <p className="comment-date">{dateFormat(comment.date)}</p>
                                </span>
                                <div className="comment-content">
                                    {parse(comment.content.rendered.split('<p>').join('<p class="comment-body">'))}
                                </div>
                            </div>

                        </div>
                    })


          
                : null}
            {(post) ? 
  
            

            <form className="comment-form" onSubmit={(event) => submitComment(event)}>
                <input type="hidden" id="postId" value={post.id} />
           
                    <label className="comment-input" htmlFor="name">Name:
                    </label>
                        <input className="comment-input-text"
                        id="name" 
                        type="text" 
                        value={commentName}
                        onChange={(event) => setCommentName(event.target.value)}
                        required 
                        
                        />
                
                    <label className="comment-input" htmlFor="email">Email:
                    </label>
                        <input className="comment-input-text"
                        id="email"
                        value={commentEmail}
                        onChange={(event) => setCommentEmail(event.target.value)}
                        type="email"
                        required
                        />
   
                    <label className="comment-input" htmlFor="comment">Comment:
                        </label>
                        <textarea className="comment-input-text textarea"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        id="comment"
                        required
                        />
                
                <input className="comment-input-button" type="submit" value="Post Comment" />
            </form>
                : null }
                </div>
        </div>
    )
}


export default postItem;

