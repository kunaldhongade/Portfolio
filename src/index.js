// import React from "react";
// import { ReactDOM } from "react";
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.querySelector("#root")).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
