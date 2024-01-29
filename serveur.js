const http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url == "/acceuil.html"){
        res.write("<!DOCTYPE html><html><body><h1>Acceuil</h1><p>Bienvenue sur l'acceuil</p></body></html>");
        console.log("Vous êtes à l'acceuil");
    }
    if (req.url == "/Logo"){
        res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" alt="Photo de plage vue du dessus" /></p></body></html>');
        console.log("Vous êtes au logo");
    }
    if (req.url == "/profile"){
        res.write("<!DOCTYPE html><html><body><h1>Bienvenue sur votre profile</h1></body></html>");
        console.log("Vous êtes sur votre profile");
    }
    res.end();
  }).listen(8080);
  console.log("serveur créé");
