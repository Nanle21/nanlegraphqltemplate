import * as dotenv from "dotenv";
dotenv.config();

const isServer = process.env.IS_SERVER;
const onMaintenance = process.env.ON_MAINTENANCE;
const databaseUrl = process.env.DATABASE_URL;
const serverUrl = process.env.SERVER_URL;

export { isServer, onMaintenance, databaseUrl, serverUrl };
