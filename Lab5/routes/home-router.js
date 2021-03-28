const Router = require('@koa/router'); /**Breaking down a routes in moduler passion
Koa does not support routes in the core module. 
We need to use the Koa-router module to easily create routes in Koa. 
Install this module using the following command.
npm i @koa/router
**/

const router = new Router({
    prefix : '/home'
});

router.get('/1',ctx=>{//ctx shorter version of context
    ctx.body= 'Getting the world';
});

router.post('/1',ctx=>{
    ctx.body = 'Posting the world';
});

module.exports =router;