import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./homeRoutes";

export const AppNavigation = (
  <Routes>
    <Route path="/home" children={homeRoutes} />
    {/* <Route path="/profile" children={homeRoutes} />
    <Route path="/settting" children={homeRoutes} /> */}
  </Routes>
);
