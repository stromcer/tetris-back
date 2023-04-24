import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Options from "../views/Options";
import Layout from "../layout/Layout";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Instrucciones from "../components/AcercaDe/Instrucciones";
import Chat from "../server/Chat";
import Controls from "../components/Controls";
import AcercaDe from "../views/AcercaDe";
import QueEsTetris from "../components/AcercaDe/QueEsTetris";
import JugarOnline from "../components/AcercaDe/JugarOnline";
import PreguntasFrecuentes from "../components/AcercaDe/PreguntasFrecuentes";
import SobreNosotros from "../components/AcercaDe/SobreNosotros";
import Soporte from "../components/AcercaDe/Soporte";


const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/registro",
    element:<Registro />
  },
  {
    path:"/acercaDe/",
    children:[{
      path:"/acercaDe/",
      element: <AcercaDe />
    },
    {
      path:"/acercaDe/instrucciones",
      element:<Instrucciones />
    },
    {
      path:"/acercaDe/queEsTetris",
      element:<QueEsTetris />
    },
    {
      path:"/acercaDe/jugarOnline",
      element:<JugarOnline />
    },
    {
      path:"/acercaDe/preguntasFrecuentes",
      element:<PreguntasFrecuentes />
    },
    {
      path:"/acercaDe/sobreNosotros",
      element:<SobreNosotros />
    },
    {
      path:"/acercaDe/soporte",
      element:<Soporte />
    }]
  },
  {
    path:"/chat",
    element:<Chat />
  },
  {
    path:"/options/",
    children:[{
        path: "/options/",
        element: <Options />
      },
      {
        path:"/options/controls",
        element:<Controls/>
      }]
  }
]

  const fullRoutes = [{
    path: "/",
    element: <Layout/>,
    children: routes

  }]

  const router = createBrowserRouter(fullRoutes);
  export default router
