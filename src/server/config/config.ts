import dotenv from 'dotenv';

dotenv.config();

const config = {
    port_http: Number(process.env.PORT_HTTP) || 3122,
    port_https: Number(process.env.PORT_HTTPS) || 3123,
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;