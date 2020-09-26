import React from "react";
import ReactDOM from "react-dom";
import StartPage from "./pages/start/StartPage";

import './i18n';

const App = () => {
  return (
    <StartPage />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
