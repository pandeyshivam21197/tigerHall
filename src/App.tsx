import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./modules/store";
import { RootNavigator } from "./navigation";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
