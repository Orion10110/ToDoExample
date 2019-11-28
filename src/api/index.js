const mode = "cors"
const headers = {
    "Content-Type": "application/json"
}


function ajax(url, method = "GET", body = null) {
    return fetch(url, {
        mode,
        method,
        headers,
        ...(body ? {body:JSON.stringify(body)} : {})
    })
}



function get (url) {
 return ajax(url)
}


function post(url, body) {
    return ajax(url, "POST", body)
}



function put(url, body) {
    return ajax(url, "PUT", body)
}



function del (url) {
    return ajax(url, "DELETE")
}


export {
    get,
    post,
    put,
    del
}