/* eslint-disable no-undef */
let myObj = {};

myObj = {
  blurt: function() {
    console.log("Hello.");
    var requestProperties = new AP.jiraServiceDesk.RequestProperties();

    AP.events.on("jira-servicedesk-request-properties-serialize", function() {
      requestProperties.serialize({
        com_company_myapp_location_issue_property: "testtetdstts"
      });
    });
  }
};
export { myObj };
