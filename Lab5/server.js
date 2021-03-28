const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    
 ctx.body = 'Hello World';
});

app.listen(3000,err=>{
    
    if(err){
    console.error(err);
    }else{
        console.log("Server is Working Port 3000");
    }
});
