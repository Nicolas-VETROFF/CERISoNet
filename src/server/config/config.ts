import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Basic configuration for the server: ports, directories, db, etc.
const config = {
  port_http: Number(process.env.PORT_HTTP) || 3122,
  port_https: Number(process.env.PORT_HTTPS) || 3123,
  app_dir: process.env.APP_DIR || path.resolve(__dirname, '../../client/browser'),
  nodeEnv: process.env.NODE_ENV || 'development',
  db: {
    pg_host: process.env.POSTGRES_HOST || 'localhost',
    pg_port: Number(process.env.POSTGRES_PORT) || 5432,
    pg_user: process.env.POSTGRES_USER || 'postgres',
    pg_password: process.env.POSTGRES_PASSWORD || 'password',
    pg_db: process.env.POSTGRES_DB || 'mydb',
  },
  mongodb: {
    secret: process.env.SESSION_SECRET || 'mysecret',
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/sessions',
    collection_name: process.env.MONGO_COLLECTION || 'sessions',
  }
};

export default config;
