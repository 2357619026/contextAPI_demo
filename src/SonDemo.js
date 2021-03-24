import React from "react";
import { GrandSonDemo } from "./GrandSonDemo";
import { ContextName } from "./contextName";
import { Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

export class SonDemo extends React.Component {
  static contextType = ContextName;

  render() {
    const { Person, addSonName } = this.context;

    return (
      <div>
        <hr />
        <h4>SonDemo</h4>
        <h4>person.name: {Person.name} </h4>
        {/* <h4>add my name:{addSonName("son of cheng")}...</h4> */}
        <h4>then my name is {Person.name}</h4>
        <Button
          onClick={() => (addSonName("son of cheng"), console.log("click"))}
        >
          更改我的名字
        </Button>

        <GrandSonDemo></GrandSonDemo>
      </div>
    );
  }
}
