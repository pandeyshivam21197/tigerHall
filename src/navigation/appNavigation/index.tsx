import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./homeRoutes";

export const AppNavigation: React.ReactElement = (
  <Routes>
    <Route path="/" children={homeRoutes} />
    {/* <Route path="/profile" children={homeRoutes} />
    <Route path="/settting" children={homeRoutes} /> */}
  </Routes>
);
