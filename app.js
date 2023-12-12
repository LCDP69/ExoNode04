const http = require('http');
require('dotenv').config();

const name = process.env.MY_NAME || 'DefaultName';
const city = process.env.MY_CITY || 'DefaultCity';
const language = process.env.MY_LANGUAGE || 'DefaultLanguage';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`I am ${name}, wilder in ${city}, and I love ${language}.\n`);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
