import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./header.scss";

export class Header extends Component {
  static defaultProps = {
    getLabel: columnId => columnId,
    width: 150,
    sortable: false,
    filterable: false,
    movable: false
  };

  constructor(props) {
    super(props);
    this.headerStyle = classnames(styles.header);
  }

  render() {
    const { getLabel, columnId, width } = this.props;
    return (
      <div className={this.headerStyle} style={{ width }}>
        {getLabel(columnId)}
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
  movable: PropTypes.bool
};

export default Header;
