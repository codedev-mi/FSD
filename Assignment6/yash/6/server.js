const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Welcome to my college!!!');
  } 
  //about page
  else if (req.url === '/about') {
    res.end('This is the about of college');
  }
  //contact us page
   else if (req.url === '/contactus') {
    res.end('Contact us at contact@college.com');
  }
   else if (req.url === '/login') {
    res.end('login page is here!');
  }
   else {
    res.statusCode = 404;
    res.end('error 404: Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
