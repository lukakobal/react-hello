import React from "react"; // uvozimo react
import ReactDOM from "react-dom/client"; // uvozimo dom
import App from "./App"; // uvozimo app
import "./styles.css"; // uvozimo styles

const root = ReactDOM.createRoot(document.getElementById("root")); // naredimo root kjer se bo pisal react
root.render(<App />); // renda app v root
