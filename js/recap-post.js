const loadPost = ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        displayPost(data);
    })
}

// const displayPost = (posts)=> {
//     // traditional for loop
//     // for(let i = 0; i < posts.length; i++){
//     //     console.log(posts[i]);
//     // }

//     // for of loop
//     // for( let post of posts){
//     //     console.log(post)
//     // }



//     // 1. get the post container
//     const postContainer = document.getElementById("post-container");
//     console.log(postContainer)

//     posts.forEach((post) => {

//         // 2. create HTML element
//         const li = document.createElement('li');
//         postContainer.appendChild(li);
//         li.innerText = post.title;
//         console.log(post);
//     })
// }




// {
//     "userId": 10,
//     "id": 94,
//     "title": "qui qui voluptates illo iste minima",
//     "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// }

const displayPost = (posts)=>{
    // 1. get the container and empty it
    const postContainer = document.getElementById('card-container');
    postContainer.innerHTML = '';

    posts.forEach((post) =>{
        // 2. create a element that is div
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `

        // 3. add the child to the parent
        postContainer.appendChild(postCard)
    })

}

loadPost();