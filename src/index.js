import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

class App extends PureComponent {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".app-container"));
