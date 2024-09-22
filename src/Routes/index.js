import React from "react";
import { Route, Routes } from "react-router-dom";
import WorkingPage from "../Pages/WorkingPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<WorkingPage />} />
  </Routes>
);

export default AppRoutes;