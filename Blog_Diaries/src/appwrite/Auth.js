import Config from "../Config/Config";
import { Client, Account, Databases } from "appwrite";

    const client = new Client()
  .setEndpoint(Config.url)
  .setProject(Config.projectID);

const account = new Account(client);
const databases = new Databases(client);
export {account,databases};