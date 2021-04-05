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
    // const [postId, name, email, comment] = evt.target.elements;

//   let data = JSON.stringify({
//     post: postId.value,
//     author_name: name.value,
//     author_email: email.value,
//     content: comment.value,
//   });
  
//   fetch(ACTION_URL, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: data,
//   })
//     .then((response) => {
//       if (response.ok === true) {
//         // Submitted successfully!
//       }

//       return response.json();
//     })
//     .then((object) => {
//       // Comment submission failed.
//       // Output `object.message` to see the error message.
//     })
//     .catch(error => console.error('Error:', error));
// }
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
            
            
            
           <Map pins={[post]}/>
           </div>

           }
            <div className="post-wrapper">
            {(comments) ? 
                    comments.data.map((comment, idx)=> {
            
                        return <div className="comment-wrapper" key={idx}>
                            <img className="comment-avatar" alt={`${comment.author_name} avatar`} src={comment.author_avatar_urls["48"]}>
                            </img>
                            <div className="comment-content">
                                 <p className="comment-author">{comment.author_name} says:</p>
                                 {parse(comment.content.rendered.split('<p>').join('<p class="comment-body">'))}
                            </div>

                        </div>
                    })


          
                : null}
            {(post) ? 
  
            

            <form className="post-con" onSubmit={(event) => submitComment(event)}>
                <input type="hidden" id="postId" value={post.id} />
                <div>
                    <label htmlFor="name">Name*</label>
                    <input 
                    id="name" 
                    type="text" 
                    value={commentName}
                    onChange={(event) => setCommentName(event.target.value)}
                    required 
                    
                    />
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                    id="email"
                    value={commentEmail}
                    onChange={(event) => setCommentEmail(event.target.value)}
                    type="email"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment*</label>
                    <textarea
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    id="comment"
                    required
                    />
                </div>
                <input type="submit" value="Post Comment" />
            </form>
                : null }
                </div>
        </div>
    )
}


export default postItem;

// {
//   "data": [
//     {
//       "id": 48,
//       "post": 1413,
//       "parent": 0,
//       "author": 0,
//       "author_name": "Auntie Carla",
//       "author_url": "",
//       "date": "2021-03-25T18:27:44",
//       "date_gmt": "2021-03-25T18:27:44",
//       "content": {
//         "rendered": "<p>Wonderful..</p>\n"
//       },
//       "link": "https://businessesoftheearth.org/muma_cultural_identity/#comment-48",
//       "status": "approved",
//       "type": "comment",
//       "author_avatar_urls": {
//         "24": "https://secure.gravatar.com/avatar/6c5ce7de08c2af86b3ef06e4985b81e9?s=24&d=mm&r=g",
//         "48": "https://secure.gravatar.com/avatar/6c5ce7de08c2af86b3ef06e4985b81e9?s=48&d=mm&r=g",
//         "96": "https://secure.gravatar.com/avatar/6c5ce7de08c2af86b3ef06e4985b81e9?s=96&d=mm&r=g"
//       },
//       "meta": [],
//       "_links": {
//         "self": [
//           {
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/comments/48"
//           }
//         ],
//         "collection": [
//           {
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/comments"
//           }
//         ],
//         "up": [
//           {
//             "embeddable": true,
//             "post_type": "post",
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/posts/1413"
//           }
//         ]
//       }
//     },
//     {
//       "id": 46,
//       "post": 1413,
//       "parent": 0,
//       "author": 0,
//       "author_name": "AnnMarie",
//       "author_url": "",
//       "date": "2021-03-25T01:30:18",
//       "date_gmt": "2021-03-25T01:30:18",
//       "content": {
//         "rendered": "<p>This is wonderful Jaimelle!!!</p>\n"
//       },
//       "link": "https://businessesoftheearth.org/muma_cultural_identity/#comment-46",
//       "status": "approved",
//       "type": "comment",
//       "author_avatar_urls": {
//         "24": "https://secure.gravatar.com/avatar/7ab298c75d469dc5167574077fe171ab?s=24&d=mm&r=g",
//         "48": "https://secure.gravatar.com/avatar/7ab298c75d469dc5167574077fe171ab?s=48&d=mm&r=g",
//         "96": "https://secure.gravatar.com/avatar/7ab298c75d469dc5167574077fe171ab?s=96&d=mm&r=g"
//       },
//       "meta": [],
//       "_links": {
//         "self": [
//           {
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/comments/46"
//           }
//         ],
//         "collection": [
//           {
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/comments"
//           }
//         ],
//         "up": [
//           {
//             "embeddable": true,
//             "post_type": "post",
//             "href": "https://businessesoftheearth.org/wp-json/wp/v2/posts/1413"
//           }
//         ]
//       }
//     }
//   ],
//   "status": 200,
//   "statusText": "",
//   "headers": {
//     "cache-control": "no-cache, must-revalidate, max-age=0",
//     "content-length": "708",
//     "content-type": "application/json; charset=UTF-8",
//     "expires": "Wed, 11 Jan 1984 05:00:00 GMT",
//     "link": "<https://businessesoftheearth.org/wp-json/>; rel=\"https://api.w.org/\"",
//     "x-wp-total": "2",
//     "x-wp-totalpages": "1"
//   },
//   "config": {
//     "url": "https://businessesoftheearth.org/wp-json/wp/v2/comments?post=1413",
//     "method": "get",
//     "headers": {
//       "Accept": "application/json, text/plain, */*"
//     },
//     "transformRequest": [
//       null
//     ],
//     "transformResponse": [
//       null
//     ],
//     "timeout": 0,
//     "xsrfCookieName": "XSRF-TOKEN",
//     "xsrfHeaderName": "X-XSRF-TOKEN",
//     "maxContentLength": -1,
//     "maxBodyLength": -1
//   },
//   "request": {}
// }