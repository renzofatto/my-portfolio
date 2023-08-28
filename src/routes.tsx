import Layout from "./components/Layout";
import Home from "./pages/home/index";
import { Navigate } from "react-router-dom";

export const paths = {
  home: "/home",
  notFound: "*",
  error: "/error",
  root: "/",
}

const routes = [
  {
    path: paths.root,
    element: <Layout />,
    children: [
      {
        path: "",
        sidebar: false,
        element: <Navigate to={paths.home} />
      },
      {
        path: paths.home,
        name: "Home",
        element: <Home />
      },
    ]
  },
];

export default routes;
