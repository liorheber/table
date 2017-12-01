import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Resize from "./resize/resize";

import styles from "./header.scss";

export class Header extends Component {
  static defaultProps = {
    width: 150,
    sortable: false,
    filterable: false,
    movable: false,
    resizable: true,
    isHover: false
  };

  constructor(props, context) {
    super(props, context);
    this.onSort = this.onSort.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onHeaderResizeStart = this.onHeaderResizeStart.bind(this);
    this.onHeaderResizeEnd = this.onHeaderResizeEnd.bind(this);
    this.state = {
      headerStyle: classnames(styles.header),
      headerWrapperStyle: classnames(styles.header_wrapper)
    };
  }

  onSort() {
    const { onSort } = this.context;
    const { columnId, direction } = this.props;
    const getDirection = direction => {
      if (direction === "desc") {
        return "asc";
      } else {
        return "desc";
      }
    };
    onSort({ columnId, direction: getDirection(direction) });
  }

  onHeaderResizeStart(event) {
    this.currentDrag = event.clientX;
  }

  onHeaderResizeEnd(event) {
    const { columnId, width, minWidth = 60 } = this.props;
    const { onHeaderResize } = this.context;
    const finalWidth = Math.max(
      minWidth,
      width + event.clientX - this.currentDrag
    );
    onHeaderResize({ columnId, width: finalWidth });
    event.preventDefault();
    event.stopPropagation();
  }

  onFilter() {
    const { onFilter } = this.context;
    onFilter();
  }

  render() {
    const { width, resizable, Header, isHover, ...props } = this.props;
    const { headerStyle, headerWrapperStyle } = this.state;
    return (
      <div className={headerStyle} style={{ width }}>
        <div className={headerWrapperStyle}>
          <Header
            isHover={isHover}
            onSort={this.onSort}
            onFilter={this.onFilter}
            {...props}
          />
        </div>
        {resizable && (
          <Resize
            onDragStart={this.onHeaderResizeStart}
            onDragEnd={this.onHeaderResizeEnd}
          />
        )}
      </div>
    );
  }
}

Header.propTypes = {
  columnId: PropTypes.string.isRequired,
  width: PropTypes.number,
  sortable: PropTypes.bool,
  filterable: PropTypes.bool,
  movable: PropTypes.bool,
  resizable: PropTypes.bool,
  isHover: PropTypes.bool
};

Header.contextTypes = {
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
  onHeaderResize: PropTypes.func
};

export default Header;
