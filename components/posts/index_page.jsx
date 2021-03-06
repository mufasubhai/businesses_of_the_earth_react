
import React, {useState, useEffect} from 'react';
import {PostThumb} from './post_thumb'
import Header from '../header/header'
import {categoryTags, categoryNames} from '../../assets/variables/categories'
// import TableContainer from '../table/table_container'

const IndexPage = props => {

useEffect(() => {
    props.fetchFirstPosts(1)
    props.fetchProfiles()
    props.currentPageReset()
}, [])    

const [currentSection, setCurrentSection ] = useState('All Posts')
// maybe add loader here


const fetchAdditionalPosts = () => {

    let nextPage = props.currentPage + 1

    if (currentSection === "All Posts") {
        props.fetchPosts(nextPage);
        props.setCurrentPage(nextPage)
    } else {
        props.fetchPostsTag(categoryNames[currentSection], nextPage)
        props.setCurrentPage(nextPage)
    }
}



const selectTag = (tag) => {
    if (tag === "All Posts") {
        if (currentSection != tag) {
            setCurrentSection(tag);
            props.currentPageReset()
            
            
                props.fetchFirstPosts(1);
            
        }
        
    } else {
        if (currentSection != tag) {
            setCurrentSection(tag);
            props.currentPageReset()

            props.fetchFirstPostsTag(categoryNames[tag], 1);

            
        }
    }
}

const classTag = (tag) => {
    if (currentSection === tag) {
        if (tag === "Jobs & Hiring" || tag === "Discounts") {
            return 'selection-item selected-selection-item discount-jobs'
            
        } else {
            return 'selection-item selected-selection-item'

        }
        
    } else {
        if (tag === "Jobs & Hiring" || tag === "Discounts") {
            return 'selection-item discount-jobs'
            
        } else {
            return 'selection-item'

        }
       
    }
}
    
    return (
            <div className="index-page-container">

                <Header/>

                <div className="index-page-header">
                    <h1>The Businesses,</h1>
                    
                    <h1> The Stories</h1>
                    <p>Empowering Small Businesses and Surrounging Communities through <span className="bold">You.</span></p>
                </div>
           
                <div className="post-index-categories">
                    <span className="category-wrapper">
                        <div className={classTag("All Posts")} onClick={() => selectTag("All Posts")}>All Posts</div>

                    {Object.values(categoryTags).map((val, idx) => {
                        return <div className={classTag(val)} onClick={() => selectTag(val)} key={idx}>{val}</div>
                    })}
                    </span>
                </div>

                {   (props.posts.length > 0) ? 

                <div className="post-index-list">
                    <div>
                        {props.posts.map((post, idx) => {
                            return <PostThumb key={idx} post={post}/>
                        })}

                    {(!props.lastPage) ? <div className="plus-button" onClick={() => fetchAdditionalPosts()}>+</div> : null}
                    </div>ww

                </div> : null
                }
                

            </div>

        )
}

export default IndexPage;