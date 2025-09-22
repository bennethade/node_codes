const fs = require('fs')
const http = require('http')
const path = require('path')
const os = require('os')
const url = require('url')
const crypto = require('crypto')
const sayHello = require('./greetings')
const math = require('./math')
const lodash = require('lodash')




//RUNNING A SERVER ON A PORT
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello world')
// });

// server.listen(3000, () => {
//     console.log('Server runnning at http://localhost:3000')
// });




//READING OF FILE PATH
// const directory = '/user/local';
// const fileName = 'example.txt';

// const fullPath = path.join(directory, fileName);

// console.log(fullPath);




//TO GET THE OPERATING SYSTEM DETAILS
// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());



//TO READ A URL DETAIL
// const myUrl = new URL('http://example.com:8000/path/name?query=hello#hash')
// console.log('Host:', myUrl.host);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search Params:', myUrl.searchParams.get('query'));





//TO CREATE A HASH
// const hash = crypto.createHash('sha256')
// hash.update('Hello, world!');
// console.log(hash.digest('hex'))


// const message = sayHello('Developers')

// console.log(message)

// console.log(math.add(5,3));
// console.log(math.subtract(5,3));




//WORKING WITH ARRAYS
// const numbers = [1,2,3,4,5]
// const reversed = lodash.reverse(numbers)

// console.log(reversed)




//TO READ FILES IN CHUNKS
// const readableStream = fs.createReadStream('example.txt', {encoding: 'utf8'})

// readableStream.on('data', (chunk) => {
//     console.log(chunk);;
// });

// readableStream.on('end', ()=>{
//     console.log('Finished reading the file.');
// })

// readableStream.on('error', (err)=>{
//     console.error('Error', err)
// })


const writeableStream = fs.createWriteStream('output2.txt')

writeableStream.write('Hello, ')
writeableStream.write('world! ')
writeableStream.write('This is just a test message to determine if the writeable streams worked')
writeableStream.end()


writeableStream.on('finish', ()=>{
    console.log('Finish writing to the file.')
})