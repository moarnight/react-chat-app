import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = process.env.REACT_APP_APPWRITE_PROJECT_ID;
export const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
export const COLLECTION_ID_MESSAGES =
  process.env.REACT_APP_APPWRITE_COLLECTION_ID_MESSAGES;

const client = new Client();

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT);

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
