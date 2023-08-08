import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from '@thirdweb-dev/chains';
import "./index.css";
import { StateContextProvider } from "./context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThirdwebProvider activeChain={Sepolia} desiredChainId={Sepolia} clientId="f7c91386a88d829724289e46c3627147">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
