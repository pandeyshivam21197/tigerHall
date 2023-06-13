import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "../appNavigation/homeRoutes";

export const AuthNavigation = (
  <Routes>
    <Route path="/" element={homeRoutes} />
  </Routes>
);
