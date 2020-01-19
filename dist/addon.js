var proFormaFillin = (function() {
  "use strict";

  // Placeholder functions that allow request create to complete immediately if there is no ProForma form registered

  // var serializeFn = function() {
  //   window.console && console.log("ProForma skipping serialize function");
  //   new AP.jiraServiceDesk.RequestProperties().serialize();
  // };

  // var validateFn = function() {
  //   window.console && console.log("ProForma skipping validate function");
  //   new AP.jiraServiceDesk.RequestProperties().validate(true);
  // };

  // Called by the UI when a form is available

  var registerPortalForm = function(
    serviceDeskId,
    requestTypeId,
    uiValidateFunction,
    uiSerializeFunction
  ) {
    window.console &&
      console.log(
        "Registering ProForma form for service desk " +
          serviceDeskId +
          " request type " +
          requestTypeId
      );

    // Tell Jira which ProForma functions to call when Jira validates and submits the request

    serializeFn = function() {
      window.console && console.log("ProForma starting serialize function");
      var startTimestamp = window.performance ? performance.now() : 1;

      uiSerializeFunction(function(formData) {
        var endTimestamp = window.performance ? performance.now() : 0;
        formData = "testgary";
        window.console &&
          console.log(
            "ProForma finished serialize function in " +
              (endTimestamp - startTimestamp) +
              "ms"
          );
        new AP.jiraServiceDesk.RequestProperties().serialize({
          "proforma.forms.initial": formData
        });
      });
    };

    validateFn = function() {
      window.console && console.log("ProForma starting validate function");
      var startTimestamp = window.performance ? performance.now() : 1;

      uiValidateFunction(function(isValid) {
        var endTimestamp = window.performance ? performance.now() : 0;
        window.console &&
          console.log(
            "ProForma finished validate function in " +
              (endTimestamp - startTimestamp) +
              "ms"
          );
        new AP.jiraServiceDesk.RequestProperties().validate(isValid);
      });
    };
  };

  // Register events with Jira Service Desk

  AP.events.on("jira-servicedesk-request-properties-serialize", function() {
    serializeFn();
  });

  AP.events.on("jira-servicedesk-request-properties-validate", function() {
    validateFn();
  });

  return {
    registerPortalForm: registerPortalForm
  };
})();
