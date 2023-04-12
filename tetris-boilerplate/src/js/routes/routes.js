import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Options from "../views/Options";
import Layout from "../layout/layout";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/options",
    element:<Options />
  }
]





  
  const fullRoutes = [{
    path: "/",
    element: <Layout/>,
    children: routes

  }]

  const router = createBrowserRouter(fullRoutes);
  export default router