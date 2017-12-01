import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Head from "./head";
import Header from "./header";

export class Table extends Component {
  static defaultProps = {
    columns: [],
    rows: [],
    cellRenderers: {},
    headerRenderers: {}
  };

  render() {
    const { columns } = this.props;
    return (
      <Fragment>
        <Head>
          {columns.map(column => (
            <Header key={column.columnId} columnId={column.columnId} />
          ))}
        </Head>
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
