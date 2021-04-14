import TaxpayerinfoModelGenerated from "./generated/TaxpayerinfoModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TaxpayerinfoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TaxpayerinfoModelGenerated,
  ...customModel
};
