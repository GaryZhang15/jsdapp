import React from "react";

function AppAccessMain() {
  /* eslint-disable no-undef */
  AP.events.on("jira-servicedesk-request-properties-serialize", function() {
    var requestProperties = new AP.jiraServiceDesk.RequestProperties();
    requestProperties.serialize({
      com_company_myapp_location_issue_property: "testtetdstts"
    });
  });

  return <h1>hi from App access</h1>;
}

export default AppAccessMain;
