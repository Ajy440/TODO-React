import Noty from "noty";
import React from "react";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/mint.css";

class Noty2 extends React.Component {
  render() {
    return new Noty({
      type: "success",
      layout: "topRight",
      text: this.props.msg,
    }).show();
  }
}

export default Noty2;
