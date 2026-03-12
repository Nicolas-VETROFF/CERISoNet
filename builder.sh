echo "Killing existing server process...";
pkill -f "dist/src/server/app.js";

echo "Building angular application...";
cd ./src/client;
npm run build;
cd ../..;

echo "Building server application and copying angular files...";
npm run build;

echo "Starting server...";
npm run start;
