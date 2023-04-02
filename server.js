const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques à partir du répertoire de build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Les requêtes qui ne correspondent pas aux fichiers statiques doivent être renvoyées à l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Lancer le serveur sur le port spécifié ou sur le port 5000 par défaut
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});