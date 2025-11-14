const http = require('http')
const PORT =3000

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("Welcome to my College")
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("This is About Page")
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("This is Contact Page")
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("404...! Something Went Wrong")
    }
})

server.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})