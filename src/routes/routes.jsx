import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Layout from "../components/Layout";
import Productlist from "../pages/admin/Productlist";
import Users from "../pages/admin/Users";
import Productadd from "../pages/admin/Productadd";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/admin",
        element: <Layout/>,
        children: [
            {
                path: "add",
                element: <Productadd/>
            },
            {
                path: "list",
                element: <Productlist/>
            }
        
            

       
    
        ]
    },
    // {
    // path:"/productadd",
    // element:<Productadd/>
    // }
    
    
     
])