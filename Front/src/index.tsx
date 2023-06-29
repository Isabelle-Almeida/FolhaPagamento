import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/pages/Error";
import CadastroFolha from "./components/pages/Cadastro";
import ListarFolha from "./components/pages/Listar";
import BuscarFolha from "./components/pages/Buscar";
const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroFolha />,
      },
      {
        path: "/cadastrar",
        element: <CadastroFolha />,
      },
      {
        path: "/listar",
        element: <ListarFolha />,
      },
      {
        path: "/buscar",
        element: <BuscarFolha />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
