import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./head.scss";

export class Head extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.headStyle = classnames(styles.head);
  }

  render() {
    return <div className={this.headStyle}>{this.props.children}</div>;
  }
}

Head.propTypes = {};

export default Head;
