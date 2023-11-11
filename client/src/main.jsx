import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 568,
      md: 800,
      lg: 1024,
      xl: 1336,
      xxl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#6a807a", // azul escuro
      light: "#b387e2", // azul escuro
      dark: "#38165c",
    },
    secondary: {
      main: "#FFB703", //amarelo queimado
      light: "#ffd364",
      dark: "#FB8500",
    },
    greyBlue: {
      main: "#219EBC", // azul acinzentado
      light: "#3bbedf",
      dark: "#004d6f",
      contrastText: "#000000",
    },
    vividBlue: {
      main: "#1b89d3", // azul acinzentado
      light: "#80CBFC",
      dark: "#157bbe",
      contrastText: "#000000",
    },
    vividRed: {
      main: "#D62828", // azul acinzentado
      light: "#fa8282",
      dark: "#c52525",
      contrastText: "#000000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
