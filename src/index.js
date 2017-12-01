import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import columns from "./columns";

import Table from "./components/table/table";

class App extends PureComponent {
  render() {
    return <Table columns={columns} getHeader={getHeader} />;
  }
}

const getHeader = type => {
  return Head;
};

const Head = ({ value, isHover }) => <div>{value}</div>;

ReactDOM.render(<App />, document.querySelector(".app-container"));
