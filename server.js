// HANDLING HTTP REQUEST AND RESPONSE



//SETTING UP AN HTTP SERVER
const http = require('http')
const url = require('url')


//ROUTE HANDLER
const routes = {
    '/': (req, res) => {
        res.writeHead(200, {"content-type": 'text/plain'})
        res.end('Welcome to Homepage')
    },

    '/about': (req, res) => {
        res.writeHead(200, {"content-type": 'text/plain'})
        res.end('This is the About Page')
    },

    '/contact': (req, res) => {
        res.writeHead(200, {"content-type": 'text/plain'})
        res.end('This is the Contact Page')
    },

    '/notfound': (req, res) => {
        res.writeHead(200, {"content-type": 'text/plain'})
        res.end('Page Not Found')
    },
}

const server = http.createServer( (req, res) => {

    const {pathname} = url.parse(req.url)

    if (routes[pathname]) {
        routes[pathname]    (req, res)
    }else{
        routes['/notfound'](req, res)
    }





    // Handling GET Method
    // if (req.method === 'GET' && req.url === '/') {
    //     res.writeHead(200, {'content-type': 'text/plain'})
    //     res.end('Welcome to homepage')
    // }else{
    //     res.writeHead(404, {'content-type': 'text/plain'})
    //     res.end('Page Not Found')
    // }



    //Handling POST Method
    // if (req.method === 'POST' && req.url === '/submit') {
    //    let body = ''

    //    req.on('data', (chunk) => {
    //         body += chunk.toString()
    //    })

    //    req.on('end', () => {
    //         res.writeHead(200, {'content-type': 'application/json'})
    //         res.end(JSON.stringify({message:'Data received', data:body}))
    //    })

    // }else{
    //     res.writeHead(404, {"content-type": "text/plain"})
    //     res.end('Route not found')
    // }



    //Handling query parameters
    // if (req.method === 'GET' && req.url.startsWith('/search')) {
       
    //     const queryObject = url.parse(req.url, true).query

    //     res.writeHead(200, {"content-type": 'application/json'})
    //     res.end(JSON.stringify({message: 'Query received', queryObject}))

    // }else{
    //     res.writeHead(404, {'content-type': 'text/plain'})
    //     res.end('Route not found')
    // }



    

    //Setting response header
    // if (req.method === 'GET' && req.url.startsWith('/search')) {
       
    //     const queryObject = url.parse(req.url, true).query

    //     res.writeHead(200, {
    //         "content-type": 'application/json', 
    //         "custome-header": 'Nod JS Server',
    //         "custom-tracking" : '1882882'
    //     })
    //     res.end(JSON.stringify({message: 'Query received', queryObject}))

    // }else{
    //     res.writeHead(404, {'content-type': 'text/plain'})
    //     res.end('Route not found')
    // }


})



const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})