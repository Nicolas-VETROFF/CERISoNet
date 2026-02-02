import dotenv from 'dotenv';

dotenv.config();

const config = {
    port_http: Number(process.env.PORT_HTTP) || 3122,
    port_https: Number(process.env.PORT_HTTPS) || 3123,
    app_dir: process.env.APP_DIR || './src/app',
    server_dir: process.env.SERVER_DIR || './src/server',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;