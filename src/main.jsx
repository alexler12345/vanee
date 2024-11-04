import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Home } from './home/home.jsx'
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
   <>
    <Home />
  </>

);
