const http = require('http');

const PORT = 7000

const PORT2 = 7500

function handleRequest(request, response) {
  response.end("You've got some nice canines.")

};

const server = http.createServer(handleRequest);

const logger = () = console.log("Server listening on: http://localhost:" + PORT);

server.listen (PORT, logger);

function handleRequest(request, response) {
  response.end("You may want to invest in a wardrobe that is not multicolored, literal trash bags.");

};

const server2 = http.createServer(handleRequest);

const logger2 = () = console.log("Server listening on: http://localhost:" + PORT2);

server.listen (PORt2, logger);
