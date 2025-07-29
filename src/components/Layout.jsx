import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate()
  const loginData = JSON.parse(localStorage.getItem("loginData"))
  useEffect(()=>{
      if(!loginData){
        navigate("/login")
      }
  },[loginData])
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
     
      
        <Sidebar />
      

      
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;