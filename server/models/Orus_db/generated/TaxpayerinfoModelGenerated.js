/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE TaxpayerinfoModelGenerated.js PLEASE EDIT ../TaxpayerinfoModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Orus_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * TaxpayerinfoModel.create
  *   @description CRUD ACTION create
  *   @param Taxpayerinfo obj Object to insert
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Taxpayerinfo.create(item);    return result;
  },
  
  /**
  * TaxpayerinfoModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Taxpayerinfo
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Taxpayerinfo.destroy({ where: { _id: id } });
  },
  
  /**
  * TaxpayerinfoModel.get
  *   @description CRUD ACTION get
  *   @returns Taxpayerinfo
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Taxpayerinfo.findByPk(id);
    return result;
  },
  
  /**
  * TaxpayerinfoModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Taxpayerinfo
  *
  */
  async list() { 
    return await Database.getConnection().models.Taxpayerinfo.findAll();
      },
  
  /**
  * TaxpayerinfoModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Taxpayerinfo
  *   @returns Taxpayerinfo
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Taxpayerinfo.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  
  /**
  * TaxpayerinfoModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Taxpayerinfo
  *   @returns Taxpayerinfo
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Taxpayerinfo.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;