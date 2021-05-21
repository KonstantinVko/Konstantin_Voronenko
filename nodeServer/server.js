const http = require('http');
const { parse } = require('querystring');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        console.log('get woo')
    } else {
        // POST
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            res.end('ok');
        })
    }
}).listen(3000);