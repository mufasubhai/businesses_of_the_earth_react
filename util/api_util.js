import $ from 'jquery';

export const fetchPostsData = (page) => {
    
    return $.ajax({
        method: 'GET',
        url: `https://businessesoftheearth.org/wp-json/wp/v2/posts?per_page=20&page=${page}`,
    })
    
}
export const fetchFAQ = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/pages/129',
    })
    
}
export const fetchMetric = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/pages/1370',
    })
    
}
export const fetchAboutUs = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/pages/1761',
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

export const fetchCategoryPosts = (categoryTag, page) => (
    $.ajax({
        method: 'GET',
        url: `https://businessesoftheearth.org/wp-json/wp/v2/posts?categories=${categoryTag}&per_page=20&page=${page}`
    }) 
)

