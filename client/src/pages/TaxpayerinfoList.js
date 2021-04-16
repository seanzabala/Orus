// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import TaxpayerinfoActions from "../redux/actions/TaxpayerinfoActions";

// END IMPORT ACTIONS

/** APIs

* actionsTaxpayerinfo.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTaxpayerinfo.list
*	@description CRUD ACTION list
*

**/


class TaxpayerinfoList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTaxpayerinfo.loadTaxpayerinfoList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTaxpayerinfo.deleteTaxpayerinfo(this.state.idDelete).then(data => {
      this.props.actionsTaxpayerinfo.loadTaxpayerinfoList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "BIRFormNumber",
        type: "number",
        label: "BIRFormNumber"
      }, 
      {
        id: "BirthDateOrgDate",
        type: "date",
        label: "BirthDateOrgDate"
      },
    ];
    const link = "/taxpayerinfos/";

    return (
      <div>
        <h1>Taxpayerinfo List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">BIRFormNumber</TableCell>
              <TableCell align="right">BirthDateOrgDate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/taxpayerinfos/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.BIRFormNumber }</TableCell>
                <TableCell align="right">{ row.BirthDateOrgDate }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/taxpayerinfos/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
TaxpayerinfoList.propTypes = { 
  actionsTaxpayerinfo: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TaxpayerinfoListReducer.listTaxpayerinfo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaxpayerinfoList);
