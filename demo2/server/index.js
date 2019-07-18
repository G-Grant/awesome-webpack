if(typeof window === 'undefined'){
    global.window = {}
}

const express = require('express');
const app = express();
const SSR = require('../dist/demo-server.js');
const { renderToString } = require('react-dom/server');

app.get('/', (req, res)=>{
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>demo-server</title>
        </head>
        <body>
            ${renderToString(SSR)}
        </body>
        </html>
    `)
})

app.listen(8569)