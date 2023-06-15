import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "../appNavigation/homeRoutes";

export const AuthNavigation: React.ReactElement = (
  <Routes>
    <Route path="/" element={homeRoutes} />
  </Routes>
);
