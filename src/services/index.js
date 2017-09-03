const URL = "http://localhost:5001"
const header = {
    headers: {
        'Authorization': 'someauth',
        'Content-Type':'application/json'            
    }
}
export function getCategories() {
    return fetch(`${URL}/categories`, header ).then((res) => res.json())
    .then((data) => data.categories)
}

export function getCategoryPosts(categoryID){
    return fetch(`${URL}/${categoryID}/posts`, header).then( res => { 
        return res.json()
    })
}

export function getPosts(){
    return fetch(`${URL}/posts`, header).then( res => { 
        return res.json()
    })
}

export function getPost(id){
    return fetch(`${URL}/posts/${id}`, header).then( res => { 
        return res.json()
    })
}

export function getPostComments(id){
    return fetch(`${URL}/posts/${id}/comments`, header).then( res => { 
        return res.json()
    })
}

export function updatePost(id,post) {
    return fetch(`${URL}/posts/${id}`,{
        headers:header.headers,
        method:'PUT',
        body:JSON.stringify(post)
    }).then( res => { 
       return res.json()
    })
}

export function addPost(post){
    return fetch(`${URL}/posts`, {
        headers:header.headers,
        method:'POST',
        body:JSON.stringify(post)
    }).then( res => { 
        return res.json()
    })
}

export function postVote(id,vote){
    return fetch(`${URL}/posts/${id}`, {
        headers:header.headers,
        method:'POST',
        body:JSON.stringify(vote)
    }).then( res => { 
        return res.json()
    })
}

export function deletePost(id){
    return fetch(`${URL}/posts/${id}`, {
        headers:header.headers,
        method:'DELETE'
    }).then( res => { 
        return res
    })
}

export function addComment(comment){
    return fetch(`${URL}/comments`, {
        headers:header.headers,
        method:'POST',
        body:JSON.stringify(comment)
    }).then( res => { 
        return res.json()
    })
}
export function postVoteComment(id,vote){
    return fetch(`${URL}/comments/${id}`, {
        headers:header.headers,
        method:'POST',
        body:JSON.stringify(vote)
    }).then( res => { 
        return res.json()
    })
}


export function deleteComment(id){
    return fetch(`${URL}/comments/${id}`, {
        headers:header.headers,
        method:'DELETE'
    }).then( res => { 
        return res
    })
}

export function getComment(id){
    return fetch(`${URL}/comments/${id}`, header).then( res => { 
        return res.json()
    })
}


export function updateComment(id,comment) {
    return fetch(`${URL}/comments/${id}`,{
        headers:header.headers,
        method:'PUT',
        body:JSON.stringify(comment)
    }).then( res => { 
       return res.json()
    })
}
