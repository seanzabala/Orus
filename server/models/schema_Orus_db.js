// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Orus_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Taxpayerinfo
      * ------------------------------------
      */
    class Taxpayerinfo extends Sequelize.Model{}
    Taxpayerinfo.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      BIRFormNumber: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      BirthDateOrgDate: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      BirthPlace: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Citizenship: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      CivilStatus: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      DateOfArrivalInPhilippines: {
        type: Sequelize.DATE
      },
      
      EmailAddress: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      FathersName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      FaxNo: {
        type: Sequelize.FLOAT
      },
      
      FirstName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Gender: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      IDEffectiveDate: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      IDExpiryDate: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      IDIssuer: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      IDNo: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      IDType: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      IssuePlaceCountry: {
        type: Sequelize.STRING
      },
      
      LandlineNo: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      LastName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      MiddleName: {
        type: Sequelize.STRING
      },
      
      MobileNo: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      MothersMaidenName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      NickName: {
        type: Sequelize.STRING
      },
      
      PrefferedContactType: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      RegisteredName: {
        type: Sequelize.STRING
      },
      
      Suffix: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "taxpayerinfo", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
