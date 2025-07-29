import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const signupData = JSON.parse(localStorage.getItem("signupData"));

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Do you want to sign out?");
    if (confirmLogout) {
      localStorage.removeItem("signupData");
      localStorage.removeItem("loginData");

      alert("sign out successfully !");
      navigate("/signup");
    }
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Admin dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src={signupData?.name} alt={signupData?.name} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1">{signupData?.name}</Typography>
            <Typography variant="body2">{signupData?.email}</Typography>
          </Box>
        </Box>

        {/* Right Side: Sign Out Button */}
        <Button color="inherit" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
