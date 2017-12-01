import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class Table extends Component {
  static defaultProps = {
    columns: [],
    rows: [],
    cellRenderers: {},
    headerRenderers: {}
  };

  render() {
    return (
      <Fragment>
        <div>Header</div>
        <div>Body</div>
        <div>Footer</div>
      </Fragment>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  cellRenderers: PropTypes.object,
  headerRenderers: PropTypes.object
};

export default Table;
