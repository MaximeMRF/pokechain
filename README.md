# pokechain
Repository pour le hackathon Starton x Epitech


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
 