import { BrowserRouter } from "react-router-dom";
import { AppNavigation } from "./appNavigation";
import { AuthNavigation } from "./authNavigation";

export const RootNavigator = () => {
  const isLoggedIn = true; //control this value based on api call result

  return (
    <BrowserRouter>{isLoggedIn ? AppNavigation : AuthNavigation}</BrowserRouter>
  );
};
