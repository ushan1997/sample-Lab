const Router =  require('@koa/router');
const {createPost,getPosts,getPost} = require('../posts-api');

const router = new Router({
    prefix :'/posts'
});

router.get('/',ctx=>{
    ctx.body = getPosts();
});

router.post('/1',ctx=>{
    let post = ctx.request.body;//Json object
    //post should be name and description in postman
    console.log(post);
    post= createPost(post);
    ctx.response.status =201;
    ctx.body =post;
});

router.get('/:id',ctx=>{

    const id = ctx.params.id;
    console.log(id);
    let post = getPost(id);
    ctx.body = post;

});

module.exports = router;