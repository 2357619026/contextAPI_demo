import React from "react";
import { ContextName } from "./contextName";
export class GrandSonDemo extends React.Component {
  static contextType = ContextName;
  render() {
    const { Person, addGrandSonName } = this.context;
    return (
      <div>
        <h4>GrandSonDemo person.name : {Person.name}</h4>
        <h4>add my name:{addGrandSonName("grandSon of cheng")}...</h4>
        <h4>then my name is {Person.name}</h4>
      </div>
    );
  }
}
