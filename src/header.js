import React, { Component } from "react";
import classnames from "classnames";

import styles from "./header.scss";

class Header extends Component {
  render() {
    const { value, isHover, onSort } = this.props;
    const className = classnames(styles.header, {
      [styles.hover]: isHover
    });
    return (
      <div className={className} onClick={onSort}>
        {value}
      </div>
    );
  }
}

export default Header;
