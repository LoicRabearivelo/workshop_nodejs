const http = require("http");
http.createServer(function (req, res) {
    res.write('serveur créé');
    res.end();
  }).listen(8080);
  console.log("serveur créé");