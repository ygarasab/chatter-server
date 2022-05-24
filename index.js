const handlers = require('./handler')
const express = require('express');
const ws = require('ws');
const cors =require('cors');
 
const app = express();


 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json()); 
app.get('/', (_, res) => res.send('Estamos online'))
server = app.listen(3000, () => console.log('Listening on 3000'))

const wss = new ws.Server({server});
wss.on('connection', socket => handlers.onConnect(wss, socket))
