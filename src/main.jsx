import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClient,QueryClientProvider } from "@tanstack/react-query";

const QueryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={QueryClient}>
    <App/>
  </QueryClientProvider>
)

