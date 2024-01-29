const express = require("express");
const app = express();
const port = 3001;

app.get("/accueil.html", (req, res) => {
    res.send("<!DOCTYPE html><html><body><h1>Acceuil</h1><p>Bienvenue sur l'acceuil</p></body></html>");
    console.log("Vous êtes à l'acceuil");
});
app.get("/Logo", (req, res) => {
  res.send('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" alt="Photo de plage vue du dessus" /></p></body></html>');
  console.log("Vous êtes au logo");
});
app.get("/profile", (req, res) => {
  res.send("<!DOCTYPE html><html><body><h1>Bienvenue sur votre profile</h1></body></html>");
  console.log("Vous êtes sur votre profile");
});
app.listen(port, () => {
  console.log('serveur créé');
});
