const express = require('express');
const server = express();
const port = 3000;
const http = require('http');

server.listen(port, () => console.log(`Express departing now from http://localhost:${port};`));
