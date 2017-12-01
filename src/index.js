import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import columns from "./columns";

import Header from "./header";

import Table from "./components/table/table";

class App extends PureComponent {
  render() {
    return (
      <Table
        columns={columns}
        getHeader={getHeader}
        onColumnResize={onColumnResize}
      />
    );
  }
}

const onColumnResize = event => {
  console.log(event);
};

const getHeader = type => {
  return Header;
};

ReactDOM.render(<App />, document.querySelector(".app-container"));
