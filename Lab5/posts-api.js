//(14)
const UUID = require('koa-uuid');

//16)
//a)
let posts  = new Map();
//b)
const createPost =(name,description)=>{
    const post ={
    id : UUID.v4(),
    name,
    description,
    postedDate : new Date()
    }
    posts.set(post.id,post);
    return post;
}
//d)
const getPosts =()=>{
    return [...posts.values()];//return posts.values as an array
}
//e)
const getPost =(id)=>{
    return posts.get(id);
}

module.exports={createPost,getPosts,getPost}
