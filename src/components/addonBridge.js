/* eslint-disable no-undef */
const getRequestProperties = () => new AP.jiraServiceDesk.RequestProperties();

const createEventListener = (eventName, callback) => {
  AP.events.on(eventName, callback);
};

export default {
  getRequestProperties,
  createEventListener
};
