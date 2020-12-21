import $ from 'jquery';

export const fetchPostsData = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/posts',
    })
    
}

export const fetchProfilesData = () => (
    $.ajax({
        method: 'GET',
        url: `https://businessesoftheearth.org/wp-json/wp/v2/profiles-api`
    })
)



export const fetchPostData = (id) => {
    
    return $.ajax({
        method: 'GET',
        url: `https://businessesoftheearth.org/wp-json/wp/v2/posts/${id}`,
    })
    
}

export const fetchProfileData = (id) => (
    $.ajax({
        method: 'GET',
        url: `https://businessesoftheearth.org/wp-json/wp/v2/profiles-api/${id}`
    })
)