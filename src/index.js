import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FormDemo } from "./formDemo";

import App from "./App";
import { Picker_demo } from "./picker_demo";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* <FormDemo /> */}
    <Picker_demo />
  </StrictMode>,
  rootElement
);
