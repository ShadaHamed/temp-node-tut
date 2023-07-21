const http  = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    else if (req.url === '/about'){
        res.end('welcome to about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href="/">Go back</a>`
    )
})

server.listen(5000)