const loadComment = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then((response) => response.json())
    .then((data) => showComment(data))
}




// {
//     "postId": 92,
//     "id": 460,
//     "name": "eum fugit omnis optio",
//     "email": "Kara_Stokes@connie.co.uk",
//     "body": "qui qui deserunt expedita at\nprovident sequi veritatis sit qui nam tempora mollitia ratione\ncorporis vitae rerum pariatur unde deleniti ut eos ad\naut non quae nisi saepe"
// }



const showComment = (comments) =>{
    // console.log(comments)
    // 1. get the container element
    const commentContainer = document.getElementById('comment-container');

    // using foreach loop for array of object
    comments.forEach((comment) => {
        // 2. create a element 
        const commentCard = document.createElement('div')

        commentCard.innerHTML = `
        <div class="comment-card">
            <h2>${comment.name}</h2>
            <p>${comment.body}</p>  
        </div>
        `
        // 3. add the child to the parent
        commentContainer.appendChild(commentCard)
    })

}
loadComment();