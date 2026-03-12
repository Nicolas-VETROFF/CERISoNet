// CLIENT POSTGRESQL
import { Client } from 'pg';
import config from "./config";

const client = new Client({
  host: config.db.pg_host,
  port: config.db.pg_port,
  user: config.db.pg_user,
  password: config.db.pg_password,
  database: config.db.pg_db
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch(err => console.error("Failed to connect to PostgreSQL database:", err));

export default client;
