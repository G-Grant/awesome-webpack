if(typeof window === 'undefined'){
    global.window = {}
}

const express = require('express');
const app = express();
const SSR = require('../dist/demo-server.js');
const { renderToString } = require('react-dom/server');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, '../dist/demo.html'), 'utf-8');

app.use(express.static('../dist/'))

app.get('/', (req, res)=>{
    let html = template.replace('<!-- html-placeholder -->', renderToString(SSR));
    res.end(html)
})

app.listen(8569)