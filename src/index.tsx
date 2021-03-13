import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { SWRProvider } from "./config/swr";
import { BrowserRouter as Router } from "react-router-dom";
import { StarredProvider } from "./contexts/starred";
import { MealsProvider } from "./contexts/meals";
import { FdcApiKeyProvider } from "./contexts/fdcApiKey";

ReactDOM.render(
  <React.StrictMode>
    <SWRProvider>
      <FdcApiKeyProvider>
        <StarredProvider>
          <MealsProvider>
            <Router>
              <App />
            </Router>
          </MealsProvider>
        </StarredProvider>
      </FdcApiKeyProvider>
    </SWRProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
