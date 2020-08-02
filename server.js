'use strict';

const express = require('express');

// // Constants
const PORT = 8080;

// // App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World2');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);

// const http = require('http');
// const PORT = 8808;
// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello Nodejs');
// }).listen(PORT);

// console.log(`Server running at http://localhost:${PORT}/`);