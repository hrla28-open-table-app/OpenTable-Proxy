const express = require('express');
const path = require('path');
const morgan = require('morgan');

const router = require('./router.js');

const server = express();
const port = 3000;

server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../public')));

server.use('/api', router);

server.listen(port, () => console.log(`Connected on port ${port}`));
