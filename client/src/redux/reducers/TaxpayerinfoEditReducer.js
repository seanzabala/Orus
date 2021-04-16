// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  taxpayerinfo: {}
};

// Reducer
export default function TaxpayerinfoEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TAXPAYERINFO_SUCCESS:
      return { ...state, taxpayerinfo: action.payload };
    case types.UPDATE_TAXPAYERINFO_SUCCESS:
      return { ...state, taxpayerinfo: action.payload };
    case types.GET_TAXPAYERINFO_SUCCESS:
      return { ...state, taxpayerinfo: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}