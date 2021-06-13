const http= require("http");
const fs =require("fs");
const { join } = require("path");
const todos =  [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }]

const server = http.createServer((req,res)=>{
 const url =req.url;
 let data="";
 if(url==="/")
 {
     data=fs.readFileSync('./index.html')
 }
 else if(url==="/about")
 {
    data=fs.readFileSync('./about.html')
 }
 else if (url==="/todos"){
     data= JSON.stringify(todos)
 }
 else if (url==="/todoapp")
 {
     data=fs.readFileSync('./todoapp/index.html')
 }

 else if (url === '/todoapp-script.js') {
    data = fs.readFileSync('./todoapp/app.js')
 }
 else{
     data=data=fs.readFileSync('./notfound.html')
 }

 res.end(data)
})
 
server.listen(3000);
