import { Route } from "react-router-dom";
import { HomeScreen } from "../../../screens/homeScreen";

export const homeRoutes: React.ReactElement = (
  <Route>
    <Route path="/" element={<HomeScreen />} />
  </Route>
);
