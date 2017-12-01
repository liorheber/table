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
    const { onDragStart, onDragEnd } = this.props;
    return (
      <div
        className={this.resizeStyle}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    );
  }
}

Resize.propTypes = {};

export default Resize;
