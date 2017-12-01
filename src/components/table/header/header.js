import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Resize from "./resize/resize";

import styles from "./header.scss";

export class Header extends Component {
  static defaultProps = {
    getLabel: columnId => columnId,
    width: 150,
    sortable: false,
    filterable: false,
    movable: false,
    resizable: true,
    isHover: false
  };

  constructor(props, context) {
    super(props, context);
    this.onSort = this.onSort.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.state = {
      headerStyle: classnames(styles.header)
    };
  }

  onSort() {
    const { onSort } = this.context;
    const { columnId, direction } = this.props;
    const getDirection = direction => {
      if (direction === "desc") {
        return "asc";
      } else {
        return "desc";
      }
    };
    onSort({ columnId, direction: getDirection(direction) });
  }

  onFilter() {
    const { onFilter } = this.context;
    onFilter();
  }

  render() {
    const {
      getLabel,
      columnId,
      width,
      resizable,
      Header,
      isHover
    } = this.props;
    const { headerStyle } = this.state;
    return (
      <div className={headerStyle} style={{ width }}>
        <Header
          isHover={isHover}
          value={getLabel(columnId)}
          onSort={this.onSort}
          onFilter={this.onFilter}
        />
        {resizable && <Resize />}
      </div>
    );
  }
}

Header.propTypes = {
  columnId: PropTypes.string.isRequired,
  getLabel: PropTypes.func,
  width: PropTypes.number,
  sortable: PropTypes.bool,
  filterable: PropTypes.bool,
  movable: PropTypes.bool,
  resizable: PropTypes.bool,
  isHover: PropTypes.bool
};

Header.contextTypes = {
  onSort: PropTypes.func,
  onFilter: PropTypes.func
};

export default Header;
