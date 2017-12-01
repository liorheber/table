import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./fixed_area.scss";

export class FixedArea extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.fixedAreaStyle = classnames(styles.fixed_area);
  }

  render() {
    return <div className={this.fixedAreaStyle}>{this.props.children}</div>;
  }
}

FixedArea.propTypes = {};

export default FixedArea;
