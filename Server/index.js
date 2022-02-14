const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//createServer is a method from the http lib, we pass is a reqest and response
//fat arrow means we are passing a function as a parameter
//no return value bc these are all async functions
//this is old syntax
//calling end is the real return(end of the return value) bc you are calling functions on the response object
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
//listen is registering with the OS
//this is code that gets run in the case of a success
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});