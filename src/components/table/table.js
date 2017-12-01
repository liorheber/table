import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Head from "./head/head";
import Header from "./header/header";
import FixedArea from "./fixed_area/fixed_area";

import { enrichColumns } from "./utils/columns";

export class Table extends Component {
  static defaultProps = {
    columns: [],
    rows: [],
    getCell: () => null,
    getHeader: () => null,
    onColumnResize: () => null
  };

  constructor(props, context) {
    super(props, context);
    this.onSort = this.onSort.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onHeaderResize = this.onHeaderResize.bind(this);
    this.state = {
      columns: []
    };
  }

  getChildContext() {
    return {
      onSort: this.onSort,
      onFilter: this.onFilter,
      onHeaderResize: this.onHeaderResize
    };
  }

  componentDidMount() {
    const { columns, getCell, getHeader } = this.props;
    this.setState({
      columns: enrichColumns({ columns, getCell, getHeader })
    });
  }

  componentWillReceiveProps() {
    const { columns, getCell, getHeader } = this.props;
    this.setState({
      columns: enrichColumns({ columns, getCell, getHeader })
    });
  }

  onSort({ columnId, direction }) {
    const { onSort } = this.props;
    onSort && onSort({ columnId, direction });
  }

  onFilter() {
    console.log("filter");
  }

  onHeaderResize({ columnId, width }) {
    const { onColumnResize } = this.props;
    onColumnResize && onColumnResize({ columnId, width });
  }

  render() {
    const { columns } = this.state;
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

Table.childContextTypes = {
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
  onHeaderResize: PropTypes.func
};

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  getCell: PropTypes.func,
  getHeader: PropTypes.func,
  onColumnResize: PropTypes.func
};

export default Table;
