import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./head.scss";

export class Head extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.headStyle = classnames(styles.head);
    this.state = {
      isHover: false
    };
  }

  onMouseEnter() {
    this.setState({ isHover: true });
  }

  onMouseLeave() {
    this.setState({ isHover: false });
  }

  render() {
    const { children } = this.props;
    const { isHover } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={this.headStyle}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            isHover
          })
        )}
      </div>
    );
  }
}

Head.propTypes = {};

export default Head;
