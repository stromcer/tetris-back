import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";

const routes = [{
    path: "/",
    element: <Home />
}]

  const router = createBrowserRouter(routes);
  export default router