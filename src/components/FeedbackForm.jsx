import React from "react";
import styles from "./styles.css";
import childRoutes from "../childRoutes";
import Header from "./children/Header";
import Body from "./children/Body";

const FeedbackForm = () => (
  <div className={styles.FeedbackForm}>
    <Header />
    <Body />
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
