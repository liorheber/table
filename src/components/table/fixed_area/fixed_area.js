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
    const { isHover, children } = this.props;
    return (
      <div className={this.fixedAreaStyle}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            isHover
          })
        )}
      </div>
    );
  }
}

FixedArea.propTypes = {};

export default FixedArea;
