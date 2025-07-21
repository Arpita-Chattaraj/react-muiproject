import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Admin Dashboard
          </Typography>
        </Box>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
      </Toolbar>
      
          
    </AppBar>
  );
};

export default Navbar;
