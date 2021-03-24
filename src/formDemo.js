import React from "react";

export class FormDemo extends React.Component {
  handelSubmit = (e) => {
    e.preventDefault();
    console.log("handelSubmit");
  };
  render() {
    return (
      <div>
        <input type={"text"} onSubmit={(e) => this.handelSubmit(e)}></input>
      </div>
    );
  }
}
