import $ from 'jquery';

export const fetchPostsgit staData = () => {
    
    return $.ajax({
        method: 'GET',
        url: 'https://businessesoftheearth.org/wp-json/wp/v2/posts',
    })
    
}

export const fetchAboutMeData = () => (
    $.ajax({
        method: 'GET',
        url: ``
    })
)

export const createOTBSample = OTBSample => {
    
 return   $.ajax({
        method: 'POST',
        url: `api/otb_samples`,
        data: { OTBSample }
    })
}

export const updateOTBSample = (OTBSample, OTBSampleCompositeId) => (
    $.ajax({
        method: 'PATCH',
        url: `api/otb_samples/${OTBSampleCompositeId}`,
        data: { OTBSample }
    })
)

export const deleteOTBSample = OTBSampleCompositeId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/otb_samples/${OTBSampleCompositeId}`,
        data: OTBSampleCompositeId
    })
}