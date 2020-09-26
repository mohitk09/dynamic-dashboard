import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-dropdown/style.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
