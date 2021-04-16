// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function TaxpayerinfoListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TAXPAYERINFO_SUCCESS:
      return { ...state, taxpayerinfo: action.payload };
    case types.LIST_TAXPAYERINFO_SUCCESS:
      return { ...state, listTaxpayerinfo: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}