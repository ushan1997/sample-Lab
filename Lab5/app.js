const Koa =  require('koa');
const HomeRoutes = require('./routes/home-router');//import the home-router.js file
const PostRoutes = require('./routes/post-routes');
const bodyParser = require('koa-bodyparser');


const app = new Koa();//Creating koa application

/**
 * 
 * app.use(MiddleWare = bodyParser), MiddleWare => get request responce all the object and change what w want to **/
app.use(bodyParser());//Get the dataStream of the body of request convert into what we need type of data 
//Ex:(Content-Type Header-application/json) convert into (json)

//Registering routes along with a allow methods
app.use(HomeRoutes.routes()).use(
    HomeRoutes.allowedMethods());//Rotes are blocking the other codes in below But middeleWare dont do that

app.use(PostRoutes.routes()).use(
    PostRoutes.allowedMethods());


app.use(ctx=>{
    ctx.body = 'Hello World';//If there any request comes just returns it to hellow world
    //Ex: http://localhost:3000/uiiiiii returns Hellow World
    //Ex: http://localhost:3000/ushan   returns Hellow World
});

app.listen(3000,err=>{
    if(err){
        console.error(err);
    }else{
        console.log("Server is Working Port 3000");
    }
});
