import $ from 'jquery';

export const fetchPostsData = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/posts?per_page=60',
    })
    
}
export const fetchFAQ = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/pages/129',
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