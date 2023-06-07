/**
 * @description: This is for learning purpose
 * @author: Aufa Billah
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

// render app to root
root.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
 );
 
reportWebVitals();
