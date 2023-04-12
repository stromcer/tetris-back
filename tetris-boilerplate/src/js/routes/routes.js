import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Options from "../views/Options";
import Layout from "../layout/layout";
import Login from "../views/Login";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/options",
    element:<Options />
  },
  {
    path:"/login",
    element:<Login />
  }
]


  const fullRoutes = [{
    path: "/",
    element: <Layout/>,
    children: routes

  }]

  const router = createBrowserRouter(fullRoutes);
  export default router