// Hyrje ne Node

// console.log("My first app in Node.js")
// const name="John";
// const age=30;
// console.log( `My name is ${name} and I am ${age} years old`);

var http=require("http");

var server = http.createServer((request,response)=>{
response.writeHead(200,{'Content-Type':'text/plain'});
response.end('Hello World');
}).listen(8080);//porta

console.log('Server running at http://127.0.0.1:8080/');