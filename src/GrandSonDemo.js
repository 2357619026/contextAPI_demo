import React from "react";
import { ContextName } from "./contextName";
import { Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
export class GrandSonDemo extends React.Component {
  static contextType = ContextName;
  render() {
    const { Person, addGrandSonName } = this.context;
    return (
      <div>
        <hr />
        <h4>GrandSonDemo person.name : {Person.name}</h4>
        {/* <h4>add my name:{addGrandSonName("grandSon of cheng")}...</h4> */}
        <h4>then my name is {Person.name}</h4>

        <Button
          onClick={() => (
            addGrandSonName("son of cheng"), console.log("click")
          )}
        >
          更改我的名字
        </Button>
      </div>
    );
  }
}
