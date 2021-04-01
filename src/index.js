import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FormDemo } from "./formDemo";

import App from "./App";
import { Picker_demo } from "./picker_demo";
import { ModalDemo } from "./modalDemo";
import { NewDemo } from "./newDemo";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NewDemo />
  </StrictMode>,
  rootElement
);
