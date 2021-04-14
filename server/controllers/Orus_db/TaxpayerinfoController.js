import TaxpayerinfoControllerGenerated from "./generated/TaxpayerinfoControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import TaxpayerinfoModel from "../../models/Orus_db/TaxpayerinfoModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/taxpayerinfo`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     TaxpayerinfoControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await TaxpayerinfoModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...TaxpayerinfoControllerGenerated,
  ...customControllers
};

