import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66cc315d0028906a3a1f");

const account = new Account(client);
const db = new Databases(client);
const databaseId = "66cc3492001c3c65e582";
const collectionId = "66cc34a40009df487d30";
export { account, db, databaseId, collectionId };
