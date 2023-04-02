# Mon Projet Node.js, Express et React

Ce projet est construit avec Node.js et Express pour le backend, et React pour le frontend. Il utilise également Bootstrap pour le design.

## Prérequis

- Node.js (version 12.x ou supérieure)
- NPM (version 6.x ou supérieure)
- Heroku CLI (pour le déploiement sur Heroku)

## Configuration et installation

1. Initialisez un nouveau projet Node.js en exécutant la commande suivante :

```
npm init
```

Lorsque vous êtes invité à spécifier le point d'entrée, assurez-vous de préciser `server.js` :

```
entry point: (index.js) server.js
```

2. Installez Express, nodemon, axios, react-router-dom et Bootstrap comme dépendances de votre projet :

```
npm install express nodemon axios react-router-dom bootstrap react-bootstrap
```

3. Créez un fichier `server.js` pour votre application Node.js avec Express.

4. Modifiez le fichier `package.json` pour utiliser `nodemon` lors du démarrage de votre serveur et ajoutez des scripts pour le client React et le déploiement :

```json
"scripts": {
    "start": "node server.js",
    "watch": "nodemon server.js",
    "client": "cd client && npm start",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build",
    "build": "cd client && npm run build"
  },
  "engines": {
    "node": "18.x"
  },
```

5. Créez une nouvelle application React dans le dossier `client` en exécutant la commande suivante :

```
npx create-react-app client
```

6. Pour intégrer Bootstrap dans votre application React, ajoutez le lien vers le fichier CSS de Bootstrap dans le fichier `public/index.html` de votre application React :

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>
```

## Commandes utiles

- Pour démarrer le serveur Node.js :

```
npm start
```

- Pour démarrer le serveur Node.js avec `nodemon` :

```
npm run watch
```

- Pour démarrer le serveur de développement React (assurez-vous d'être dans le dossier `client`) :

```
npm run client
```

- Pour installer les dépendances du client React et construire le frontend pour le déploiement :

```
npm run install-client && npm run build
```

## Déploiement

Pour déployer votre application, suivez les instructions spécifiques à la plateforme de déploiement choisie, comme [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) pour le backend et [Netlify](https://docs.netlify.com/cli/get-started/) ou [Vercel](https://vercel.com/docs) pour le frontend.

### Déploiement sur Heroku

1. Installez [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) et connectez-vous à votre compte Heroku en utilisant la commande suivante :

```
heroku login
```

2. Créez une nouvelle application Heroku en exécutant la commande :

```
heroku create <nom_de_votre_application>
```
Remplacez <nom_de_votre_application> par le nom souhaité pour votre application. Heroku générera un nom aléatoire si vous ne spécifiez pas de nom.

Ajoutez le dépôt Heroku en tant que remote à votre dépôt Git local :
```
git remote add heroku <URL_du_dépôt_Heroku>
```
Remplacez <URL_du_dépôt_Heroku> par l'URL de votre dépôt Heroku, qui peut être trouvée dans le tableau de bord de votre application Heroku ou dans la sortie de la commande heroku create.

Ajoutez et commitez tous les changements dans votre dépôt local :
```
git add .
git commit -m "Message de commit pour le déploiement"
```
Déployez votre application sur Heroku en exécutant la commande suivante :
```
git push heroku master
```
Heroku détectera automatiquement qu'il s'agit d'une application Node.js et installera les dépendances nécessaires, puis démarrera votre application.

Pour ouvrir votre application dans un navigateur, utilisez la commande :
```
heroku open
```
Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.