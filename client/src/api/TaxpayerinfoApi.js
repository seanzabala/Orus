import TaxpayerinfoApiGenerated from "./generated/TaxpayerinfoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TaxpayerinfoApi extends TaxpayerinfoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Taxpayerinfo List
  static getTaxpayerinfoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/taxpayerinfos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TaxpayerinfoApi;