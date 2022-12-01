import { Post } from "./post";

var posts: Post[] = [];

export function getPosts(): Post[] {
    fetch('http://localhost:3000/posts').then((res) => {
        return res.json();
    }).then((json) => {
        posts = json;
    })
    return posts;
}

export async function editPost(post: Post) {
    await fetch('http://localhost:3000/posts/' + post.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8', },
        body: JSON.stringify(post)
    });
}

export function getFilteredPosts(x: boolean): Post[] {
    return posts.filter((e) => { return (e.active == x) });
}

export function changeActiveStatus(id:number) {
    let index = posts.findIndex((e) => { return (e.id == id) });
    posts[index].active = !posts[index].active;
    editPost(posts[index]);
}
