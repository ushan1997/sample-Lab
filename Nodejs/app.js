//1
console.log("HEllow world");

//2
const os =  require('os');//allows you to work with the OS details on your computer.

console.log("Os Architecture ="+os.arch());
console.log(os.hostname());
console.log(os.platform())
console.log(os.type())
console.log(os.userInfo())
console.log(os.version())

//3
const fs =  require('fs');//allows you to work with the file system on your computer.

var textFile = __dirname+ '/test.txt' ;

console.log(__dirname);//Output-C:\Users\Lenovo\Desktop\Nodejs

fs.readFile(/**pathfile**/ textFile ,/*callback*/ (err/**exception */,data)=>{

      // if
      // err = null=> false
      // err =undefined => false
      // err =0 => false
      // err = '' => false
      // err = false => false


      if(err){
         //throw err;
         return err;
      }else{
         console.log(data.toString());
         console.log()
      }
});

const data=fs.readFileSync(textFile);//main thread getting blocking and execute in syncronized way
console.log(data.toString());

console.log(fs.readFileSync(textFile,'utf-8'));//Try printing the value of data without toString method.

//4
const fs =  require('fs');//allows you to work with the file system on your computer.
var textFile = __dirname+ '/test.txt' ;
var conpyingTextFile = __dirname + '/copy-test.txt';


var readStream = fs.createReadStream(textFile);
var writeStream = fs.createWriteStream(conpyingTextFile);
// Ex:writeStream responce write to client machine
// Ex:readStream  reading from network IO of the server


readStream.pipe(writeStream  /**Response write to client*/);//push all of its data to the attached Writable. 

readStream.addListener('close',()=>{

   console.log(fs.readFileSync('copy-test.txt','utf-8'));
})

writeStream.addListener('close',()=>{
   console.log("Writing is over");
})

//5

const http = require('http');//Import the http module from the core libraries.

http.createServer((req,res)=>{
   res.setHeader('Content-Type','text.html');
   res.write('<h1>Server is running</h1>');
   res.end();
}).listen(3000);

//6

const http = require('http');


http.createServer(function(req,res){

   switch(req.method){

      case 'GET':res.write('<h1>Hellow world</h1>');
                 res.end(); 

             break;   
       
      case 'POST':req.on('data',data=>{
                  res.write('<h1>Hellow ' + data + "</h1>");
                  res.end();
      });
            break;
      
      case 'PUT' :req.on('data',data=>{
                  res.write('<h1>Hellow ' + data + "</h1>");
                  res.end();
      })
     
      }
      
   }).listen(3000,(err)=>{
      console.log("Server is running")
   });
                  
   
// http.createServer((request, response) => {
//    console.log('Now we have a http message with headers but no data yet.');
//    request.on('data', chunk => {
//      console.log('A chunk of data has arrived: ', chunk);
//      res.write('<h1>Hellow ' + chunk + "</h1>");
//    });
//    request.on('end', () => {
//      console.log('No more data');
//    })
//  }).listen(3000)
// const http = require('http');
// http.createServer((request, response) => {
//    const chunks = [];
//    request.on('data', chunk => chunks.push(chunk));
//    request.on('end', () => {
//      const data = Buffer.concat(chunks);
//      console.log('Data: ', data);

//    })
//  }).listen(8080)