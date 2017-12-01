import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import columns from "./columns";

import Table from "./components/table";

class App extends PureComponent {
  render() {
    return <Table columns={columns} />;
  }
}

ReactDOM.render(<App />, document.querySelector(".app-container"));
