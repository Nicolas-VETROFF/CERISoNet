import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Basic configuration for the server: ports, directories, db, etc.
const config = {
  port_http: Number(process.env.PORT_HTTP) || 3122,
  port_https: Number(process.env.PORT_HTTPS) || 3123,
  app_dir: process.env.APP_DIR || path.resolve(__dirname, '../../client/browser'),
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
