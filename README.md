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
```

## Lancement de l'environnement de DEV

```bash
npm run dev;
```

## Création du build

```bash
npm run build;
```

## Ports utilisés
- 3122 (http)
- 3123 (https)
