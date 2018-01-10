import React from "react";
import { render } from "react-dom";
import styles from "../scss/index.scss";
import Hello from "./components/hello";

render(<Hello />, document.getElementById("app"));
