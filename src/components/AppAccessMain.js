import React from "react";
import { myObj } from "../jiratool";

window.myObj = myObj;

function AppAccessMain() {
  window.myObj.blurt();
  return <h1>hi from App access</h1>;
}

export default AppAccessMain;
