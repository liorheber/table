import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Resize from "./resize";

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

  constructor(props) {
    super(props);
    this.state = {
      headerStyle: classnames(styles.header)
    };
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
        <Header isHover={isHover} value={getLabel(columnId)} />
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

export default Header;
