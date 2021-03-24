import React from "react";
import { ContextName } from "./contextName";
import { SonDemo } from "./SonDemo";

//首字母大写
export class ParentDemo extends React.Component {
  state = {
    Person: {
      name: "cheng"
    }
  };

  addGrandSonName = (value) => {
    const preName = this.state.Person.name + value;
    this.setState({
      Person: {
        ...this.state.Person,
        name: preName
      }
    });
    console.log(this.state.Person, "addGrandSonName");
  };

  addSonName = (value) => {
    const preName = this.state.Person.name + value;
    this.setState({
      Person: {
        ...this.state.Person,
        name: preName
      }
    });
    console.log(this.state.Person, "addSonName");
  };
  render() {
    return (
      <div>
        <h4>ParentDemo</h4>

        <ContextName.Provider
          value={{
            Person: this.state.Person,
            addGrandSonName: this.addGrandSonName,
            addSonName: this.addSonName
          }}
        >
          <SonDemo></SonDemo>
        </ContextName.Provider>
      </div>
    );
  }
}
