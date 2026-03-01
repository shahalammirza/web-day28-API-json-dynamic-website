const loadPost = ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        displayPost(data);
    })
}

const displayPost = (posts)=> {
    // traditional for loop
    // for(let i = 0; i < posts.length; i++){
    //     console.log(posts[i]);
    // }

    // for of loop
    // for( let post of posts){
    //     console.log(post)
    // }



    // 1. get the post container
    const postContainer = document.getElementById("post-container");
    console.log(postContainer)

    posts.forEach((post) => {

        // 2. create HTML element
        const li = document.createElement('li');
        postContainer.appendChild(li);
        li.innerText = post.title;
        console.log(post);
    })
}