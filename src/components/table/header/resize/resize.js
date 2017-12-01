import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./resize.scss";

export class Resize extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.resizeStyle = classnames(styles.resize);
  }

  render() {
    return <div className={this.resizeStyle} />;
  }
}

Resize.propTypes = {};

export default Resize;
