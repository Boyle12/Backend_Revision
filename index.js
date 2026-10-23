// create server using express

import express from "express"
const app = express()
const port = 8000
app.get("/",(req,res)=>{
  res.send("hello, this side Abhinav")
})
app.listen(port,()=>{
  console.log(`server is started on ${port}`);
  
})





















/* create server using node
//import http from "http"
//const port = 8000;
//const server = http.createServer((req,res)=>{
  if(req.url == "/"){
    res.end("welcome to home route")
  }
  else if(req.url=="/about"){
    res.end("welcome to about route ")
    }
  else if(req.url=="/login"){
    res.end("welcome to login route")
    }
    else if(req.url=="/contact"){
      res.end("welcome to contact route")
    }
    else{
      res.end("404 not found")
    }
})

server.listen(port,() =>{
  console.log("server is started");
  
});
  */