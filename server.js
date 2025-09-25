// HANDLING HTTP REQUEST AND RESPONSE



//SETTING UP AN HTTP SERVER
const http = require('http')
const url = require('url')
const queryString = require('querystring')


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



//Middleware function for log in requests
function logRequest(req, res, next){
    console.log(`${req.method} request made to ${req.url}`);
    next(req, res)
    
}





const server = http.createServer( (req, res) => {

    // const {pathname} = url.parse(req.url)

    // if (routes[pathname]) {
    //     routes[pathname]    (req, res)
    // }else{
    //     routes['/notfound'](req, res)
    // }




    //Handling Dynamic URLs
    // const {pathname} = url.parse(req.url)

    // if(pathname.startsWith('/user/')){
    //     const userId = pathname.split('/')[2]
    //     res.writeHead(200, {'content-type': 'text/plain'})
    //     res.end(`User Id:  ${userId}`)
    // }else{
    //     res.writeHead(404, {'content-type':'text/plain'})
    //     res.end('Route Not Found')
    // }
    




    //MIDDLEWARE 
    // logRequest(req, res, (req, res) => {
    //     const {pathname} = url.parse(req.url)

    //     if(pathname.startsWith('/user/')){
    //         const userId = pathname.split('/')[2]
    //         res.writeHead(200, {'content-type': 'text/plain'})
    //         res.end(`User Id:  ${userId}`)
    //     }else{
    //         res.writeHead(404, {'content-type':'text/plain'})
    //         res.end('Route Not Found')
    //     }
    // })



    // Handling URL-encoded data (form submission)
    if(req.method === 'POST' && req.url === '/submit'){
        let data = ''

        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            const parsedData = queryString.parse(data)
            res.writeHead(200, {'content-type':'application/json'})
            res.end(JSON.stringify({message: "Form data received", parsedData}))
        })
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