'use strict';

const express = require('express')
require('dotenv').config()

const PORT = 8080

const app = express();
const mysql = require('mysql')

const host = process.env.HOST
const user = process.env.USERNAME
const password = process.env.PASSWORD

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password
})

connection.connect((err) => {
  if (err) throw err
  console.log('connected to mysql')
}) 

app.get('/', (req, res) => {
  res.send('Hello World2')
})
app.post('/conditions', (req, res) => {
  
})

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
