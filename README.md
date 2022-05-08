# Pokechain
Repository pour le hackathon Starton x Epitech

## Problème
Notre projet est un projet pour lutter contre la falsification d'authenticité d'objets grâce à la blockchain.
Dans notre cas des cartes pokémons certifiés par des entreprises spécialisées tel que [PCA](https://pcagrade.com).

## Solution
Notre solution est de stocker les cartes certifiées sur la blockchain. Pour arriver à notre but nous avons décider de créer une application web qui permettra de voir nos différentes cartes. Cette application web se découpe en plusieurs parties:

- le front en Nuxt.js
- le back en Adonis.js

Le front permettra de voir les cartes certifiées avec plusieurs informations tel que la note de la carte, son id, l'organisme qui l'a certifié.
Ou encore le prix de la carte et sa population.

Le backend fera l'interface entre le front et l'api de starton.

## Installation de l'api

 ```bash
 # Vérifiez que vous avez bien installé node (LTS) et npm
 node -v && npm -v
 # cd dans le dossier du projet
 cd pokechain-api
 # installation des dépendances
 npm install
 # Lancement du serveur de développement
 node ace serve -w
 ```

 ## Installation de la base de données

 Vérifiez que docker et docker-compose sont installés.

 ```bash
 # cd dans le dossier du projet
 cd pokechain-api
 # lancer la stack docker qui contient la base de données et le panel phpmyadmin
 docker-compose up -d
 ```

 ## Installation du frontend

 ```bash
 # cd dans le dossier du projet
 cd pokechain-front
 # installation des dépendances
 npm install
 # Lancement du serveur de développement
 npm run dev
 ```
