// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_Orus_db";
import UserModel from "../models/Orus_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.Orus_db.host +
        ":" +
        properties.Orus_db.port +
        "//" +
        properties.Orus_db.user +
        "@" +
        properties.Orus_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.Orus_db.name,
      properties.Orus_db.user,
      properties.Orus_db.password,
      {
        host: properties.Orus_db.host,
        dialect: properties.Orus_db.dialect,
        port: properties.Orus_db.port,
        logging: false
      }
    );
    this.dbConnection_Orus_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Orus_db;
  }
}

export default new Database();
