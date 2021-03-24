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
  addGrandSonName(value) {
    const preName = this.state.Person.name + value;
    this.setState({
      Person: {
        ...this.state.Person,
        name: preName
      }
    });
  }

  addSonName(value) {
    const preName = value;
    const Person = Object.assign({}, { ...this.state.Person }, { name: value });
    // this.setState({
    //   Person: {
    //     ...{Person},
    //     name: preName
    //   }
    // });
  }
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
