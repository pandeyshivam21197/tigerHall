import { Route } from "react-router-dom";
import { HomeScreen } from "../../../screens/homeScreen";

export const homeRoutes = (
  <Route>
    <Route path="homeScreen" element={<HomeScreen />} />
  </Route>
);
