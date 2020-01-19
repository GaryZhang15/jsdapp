/* eslint-disable no-undef */
import React from "react";

function AppAccessMain() {
  let requestProperties = new AP.jiraServiceDesk.RequestProperties();

  AP.events.on("jira-servicedesk-request-properties-serialize", function() {
    requestProperties.serialize({
      com_company_myapp_location_issue_property: "datasaved"
    });
  });

  return <h1>hi from App access</h1>;
}

export default AppAccessMain;
