import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from "query-string";
import AppAccessMain from "./AppAccessMain";
import DBAccessMain from "./DBAccessMain";

function Request(props) {
  const values = queryString.parse(props.location.search);
  let requestTypeId = Number.parseInt(values.requestTypeId);
  let serviceDeskId = Number.parseInt(values.serviceDeskId);

  if (requestTypeId === 11 && serviceDeskId === 2) {
    return <AppAccessMain />;
  } else if (requestTypeId === 10 && serviceDeskId === 2) {
    return <DBAccessMain />;
  }
  return <h1>no match</h1>;
}

function App() {
  const reload = () => window.location.reload();
  return (
    <Router>
      <Route path="/request" component={Request} />
      <Route path="/atlassian-connect.json" onEnter={reload} />
    </Router>
  );
}
export default App;
