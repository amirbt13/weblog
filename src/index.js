import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "./styles/index.css";
import "./styles/font.css";
//components
import App from "./App";
//mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
// graghql
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// react router dom
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
