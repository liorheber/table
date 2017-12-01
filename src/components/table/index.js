import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Head from "./head";
import Header from "./header";
import FixedArea from "./fixed_area";

export class Table extends Component {
  static defaultProps = {
    columns: [],
    rows: [],
    cellRenderers: {},
    headerRenderers: {}
  };

  render() {
    const { columns } = this.props;
    const fixedColumns = columns.filter(({ fixed }) => fixed);
    const nonFixedColumns = columns.filter(({ fixed }) => !fixed);
    return (
      <Fragment>
        <Head>
          <FixedArea>
            {fixedColumns.map(column => (
              <Header key={column.columnId} {...column} />
            ))}
          </FixedArea>
          {nonFixedColumns.map(column => (
            <Header key={column.columnId} {...column} />
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
