const setCategory = (eventID, items) => {
    let categoryPost = [];
    items.map((i) => {
        if(eventID === i.category){
            categoryPost.push(i)
        }
    })
    return categoryPost
}
const setSlug = (eventID, slugs) => {
    let slug = {};
    slugs.map((i) => {
        if(eventID === i._id){
            slug = {category: i.slug}
        }
    })
    return slug;
}


export {setCategory, setSlug}