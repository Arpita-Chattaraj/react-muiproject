import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Layout from "../components/Layout";
import Productlist from "../pages/admin/Productlist";

import Productadd from "../pages/admin/Productadd";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "add", // /admin/add
        element: <Productadd />,
      },

      {
        path: "list", // /admin/list
        element: <Productlist />,
      },
      {
        path: "edit/:id", // /admin/edit/123
        element: <Productadd />,
      },
      {
        path: "edit/:delete", // /admin/edit/123
        element: <Productadd />,
      },
    ],
  },
  // {
  // path:"/productadd",
  // element:<Productadd/>
  // }
]);
