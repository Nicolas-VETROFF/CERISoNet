# CERISoNet

## Création des clés

```bash
openssl genrsa -out key.pem;
openssl req -new -key key.pem -out csr.pem;
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem;
rm csr.pem;
```

## Installation des dépendances

```bash
npm install;
cd ./src/client;
npm install;
cd ../..;
```

## Lancement de l'environnement de DEV à la racine (serveur seulement)

```bash
npm run dev;
```

## Lancement de l'environnement de DEV dans ./src/client (client seulement)

```bash
cd ./src/client;
npm run dev;
cd ../..;
```

## Création et lancement du build (client seulement)

```bash
cd ./src/client;
npm run build;
npx http-server ./dist/client/browser -p 4201;
cd ../..;
```

## Création et lancement du build (serveur + client)

```bash
npm run build;
npm run start;
```

## Ports disponibles
- 3122 (http)
- 3123 (https)
