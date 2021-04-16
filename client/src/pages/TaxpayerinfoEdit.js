// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import TaxpayerinfoActions from "../redux/actions/TaxpayerinfoActions";

// END IMPORT ACTIONS

/** APIs

* actionsTaxpayerinfo.create
*	@description CRUD ACTION create
*
* actionsTaxpayerinfo.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTaxpayerinfo.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class TaxpayerinfoEdit extends Component {
  // Init taxpayerinfo
  constructor(props) {
    super(props);
    this.state = {
      taxpayerinfo: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTaxpayerinfo.loadTaxpayerinfo(this.props.match.params.id);
    }
    
  }

  // Insert props taxpayerinfo in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      taxpayerinfo: props.taxpayerinfo
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.taxpayerinfo._id) {
      this.props.actionsTaxpayerinfo.saveTaxpayerinfo(this.state.taxpayerinfo).then(data => {
        this.props.history.push("/");
      });
    } else {
      this.props.actionsTaxpayerinfo.createTaxpayerinfo(this.state.taxpayerinfo).then(data => {
        this.props.history.push("/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Taxpayerinfo Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="BIRFormNumber"
            label="BIRFormNumber"
            value={this.state.taxpayerinfo.BIRFormNumber || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.BIRFormNumber && this.state.taxpayerinfo.BIRFormNumber === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="BirthDateOrgDate"
            label="BirthDateOrgDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.taxpayerinfo.BirthDateOrgDate
                ? new Date(this.state.taxpayerinfo.BirthDateOrgDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "taxpayerinfo", "BirthDateOrgDate")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.taxpayerinfo.BirthDateOrgDate && this.state.taxpayerinfo.BirthDateOrgDate === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="BirthPlace"
            label="BirthPlace"
            value={this.state.taxpayerinfo.BirthPlace || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.BirthPlace && this.state.taxpayerinfo.BirthPlace === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Citizenship"
            label="Citizenship"
            value={this.state.taxpayerinfo.Citizenship || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.Citizenship && this.state.taxpayerinfo.Citizenship === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="CivilStatus"
                checked={this.state.taxpayerinfo.CivilStatus || false}
                onChange={Utils.handleChangeCheck.bind(this, "taxpayerinfo", "CivilStatus")}
                color="primary"
                required
                {...(!this.state.taxpayerinfo.CivilStatus && this.state.taxpayerinfo.CivilStatus === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="CivilStatus"
            className="mt-20"
          />
          
          <DateTimePicker
            id="DateOfArrivalInPhilippines"
            label="DateOfArrivalInPhilippines"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.taxpayerinfo.DateOfArrivalInPhilippines
                ? new Date(this.state.taxpayerinfo.DateOfArrivalInPhilippines)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "taxpayerinfo", "DateOfArrivalInPhilippines")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="EmailAddress"
            label="EmailAddress"
            value={this.state.taxpayerinfo.EmailAddress || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.EmailAddress && this.state.taxpayerinfo.EmailAddress === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="FathersName"
            label="FathersName"
            value={this.state.taxpayerinfo.FathersName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.FathersName && this.state.taxpayerinfo.FathersName === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="FaxNo"
            label="FaxNo"
            value={this.state.taxpayerinfo.FaxNo || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="FirstName"
            label="FirstName"
            value={this.state.taxpayerinfo.FirstName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.FirstName && this.state.taxpayerinfo.FirstName === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="Gender"
                checked={this.state.taxpayerinfo.Gender || false}
                onChange={Utils.handleChangeCheck.bind(this, "taxpayerinfo", "Gender")}
                color="primary"
                required
                {...(!this.state.taxpayerinfo.Gender && this.state.taxpayerinfo.Gender === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="Gender"
            className="mt-20"
          />
          
          <DateTimePicker
            id="IDEffectiveDate"
            label="IDEffectiveDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.taxpayerinfo.IDEffectiveDate
                ? new Date(this.state.taxpayerinfo.IDEffectiveDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "taxpayerinfo", "IDEffectiveDate")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.taxpayerinfo.IDEffectiveDate && this.state.taxpayerinfo.IDEffectiveDate === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="IDExpiryDate"
            label="IDExpiryDate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.taxpayerinfo.IDExpiryDate
                ? new Date(this.state.taxpayerinfo.IDExpiryDate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "taxpayerinfo", "IDExpiryDate")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.taxpayerinfo.IDExpiryDate && this.state.taxpayerinfo.IDExpiryDate === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="IDIssuer"
            label="IDIssuer"
            value={this.state.taxpayerinfo.IDIssuer || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.IDIssuer && this.state.taxpayerinfo.IDIssuer === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="IDNo"
            label="IDNo"
            value={this.state.taxpayerinfo.IDNo || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.IDNo && this.state.taxpayerinfo.IDNo === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="IDType"
                checked={this.state.taxpayerinfo.IDType || false}
                onChange={Utils.handleChangeCheck.bind(this, "taxpayerinfo", "IDType")}
                color="primary"
                required
                {...(!this.state.taxpayerinfo.IDType && this.state.taxpayerinfo.IDType === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="IDType"
            className="mt-20"
          />
          
          
          <TextField
            id="IssuePlaceCountry"
            label="IssuePlaceCountry"
            value={this.state.taxpayerinfo.IssuePlaceCountry || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="LandlineNo"
            label="LandlineNo"
            value={this.state.taxpayerinfo.LandlineNo || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.LandlineNo && this.state.taxpayerinfo.LandlineNo === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="LastName"
            label="LastName"
            value={this.state.taxpayerinfo.LastName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.LastName && this.state.taxpayerinfo.LastName === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="MiddleName"
            label="MiddleName"
            value={this.state.taxpayerinfo.MiddleName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="MobileNo"
            label="MobileNo"
            value={this.state.taxpayerinfo.MobileNo || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.MobileNo && this.state.taxpayerinfo.MobileNo === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="MothersMaidenName"
            label="MothersMaidenName"
            value={this.state.taxpayerinfo.MothersMaidenName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.taxpayerinfo.MothersMaidenName && this.state.taxpayerinfo.MothersMaidenName === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="NickName"
            label="NickName"
            value={this.state.taxpayerinfo.NickName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
          />
          
          <FormControlLabel
            control={
              <Switch
                id="PrefferedContactType"
                checked={this.state.taxpayerinfo.PrefferedContactType || false}
                onChange={Utils.handleChangeCheck.bind(this, "taxpayerinfo", "PrefferedContactType")}
                color="primary"
                required
                {...(!this.state.taxpayerinfo.PrefferedContactType && this.state.taxpayerinfo.PrefferedContactType === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="PrefferedContactType"
            className="mt-20"
          />
          
          
          <TextField
            id="RegisteredName"
            label="RegisteredName"
            value={this.state.taxpayerinfo.RegisteredName || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Suffix"
            label="Suffix"
            value={this.state.taxpayerinfo.Suffix || ""}
            onChange={Utils.handleChange.bind(this, "taxpayerinfo")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsTaxpayerinfo: bindActionCreators(TaxpayerinfoActions, dispatch),
  };
};

// Validate types
TaxpayerinfoEdit.propTypes = { 
  actionsTaxpayerinfo: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    taxpayerinfo: state.TaxpayerinfoEditReducer.taxpayerinfo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaxpayerinfoEdit);
