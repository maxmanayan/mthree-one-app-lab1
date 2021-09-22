import React from "react";
import childRoutes from "../childRoutes";

const FeedbackForm = () => (
  <div>
    <h1>Welcome to Feedback Form</h1>
  </div>
);

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Routing.md#childroutes
FeedbackForm.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  FeedbackForm.appConfig = require("../appConfig").default;
}

export default FeedbackForm;
