# Utilise l'image officielle de Node.js comme image de base
FROM node:18

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie tout le contenu de l'application dans le répertoire de travail
COPY . .

# Expose le port sur lequel l'application va tourner
EXPOSE 3000

# Démarre l'application (remplace "start" par la commande de démarrage de ton projet)
CMD ["npm", "start"]
