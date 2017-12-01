import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import Table from "./components/table";

class App extends PureComponent {
  render() {
    return <Table />;
  }
}

ReactDOM.render(<App />, document.querySelector(".app-container"));
