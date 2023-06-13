import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./modules/store";
import { RootNavigator } from "./navigation";

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
