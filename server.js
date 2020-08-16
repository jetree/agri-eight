'use strict';

const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8080

const app = express();
const mysql = require('mysql')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const host = process.env.HOST
const user = process.env.USERNAME
const password = process.env.PASSWORD

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: 'agri-eight'
})

connection.connect((err) => {
  if (err) throw err
  console.log('connected to mysql')
}) 

app.get('/', (req, res) => {
  res.send('Hello World2')
})
app.get('/conditions', (req, res) => {
  const sql = 'SELECT * FROM`agri-eight`.`conditions` LIMIT 100'
  connection.query(sql,(err, result, feilds) => {
    if (err) throw err
    res.send(result)
  })
})
app.post('/conditions', (req, res) => {
  const pi = req.body.pi
  // DBへの登録処理
  const sql = 'INSERT INTO  conditions SET ?'
  connection.query(sql,
    {
      machine_id: pi.machine_id,
      temp: pi.temp
    },
    (err, result, fields) => {
    if (err) throw err
    console.log(result)
  })
})

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
