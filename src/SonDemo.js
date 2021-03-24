import React from "react";
import { GrandSonDemo } from "./GrandSonDemo";
import { ContextName } from "./contextName";

export class SonDemo extends React.Component {
  static contextType = ContextName;

  render() {
    const { Person, addSonName } = this.context;

    return (
      <div>
        <h4>SonDemo</h4>
        <h4>person.name: {Person.name} </h4>
        <h4>add my name:{addSonName("son of cheng")}...</h4>
        <h4>then my name is {Person.name}</h4>
        <GrandSonDemo></GrandSonDemo>
      </div>
    );
  }
}
