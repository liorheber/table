import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Head from "./head";
import Header from "./header";
import FixedArea from "./fixed_area";

import { enrichColumns } from "./utils/columns";

export class Table extends Component {
  static defaultProps = {
    columns: [],
    rows: [],
    getCell: () => null,
    getHeader: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      columns: []
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

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  getCell: PropTypes.func,
  getHeader: PropTypes.func
};

export default Table;
