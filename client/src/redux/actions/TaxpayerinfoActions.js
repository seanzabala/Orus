import actionsFunction from "./generated/TaxpayerinfoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TaxpayerinfoApi from "../../api/TaxpayerinfoApi";
 
 actionsFunction.loadTaxpayerinfoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TaxpayerinfoApi
     .getTaxpayerinfoList()
     .then(list => {
       dispatch(actionsFunction.loadTaxpayerinfoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
