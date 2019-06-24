import * as React from "react";
import * as ReactDom from "react-dom";

import { Home } from "./components";
import { Provider } from "react-redux";
import { appStore } from "./store";

ReactDom.render(
  <Provider store={appStore}>
    <Home />
  </Provider>,
  document.querySelector("#myApp")
);