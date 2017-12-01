import React, { Component } from "react";
import PropTypes from "prop-types";

export class Header extends Component {
  static defaultProps = {
    getLabel: columnId => columnId,
    width: 150,
    sortable: false,
    filterable: false,
    movable: false,
    fixed: false
  };

  render() {
    const { getLabel, columnId, width } = this.props;
    return <div style={{ width }}>{getLabel(columnId)}</div>;
  }
}

Header.propTypes = {
  columnId: PropTypes.string.isRequired,
  getLabel: PropTypes.func,
  width: PropTypes.number,
  sortable: PropTypes.bool,
  filterable: PropTypes.bool,
  movable: PropTypes.bool,
  fixed: PropTypes.bool
};

export default Header;
