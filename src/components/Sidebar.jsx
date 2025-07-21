import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box sx={{ width: 200, bgcolor: "#f0f0f0", height: "100vh" }}>
      <List>
        <ListItem button component={Link} to="/admin/add">
          <ListItemText primary="Add Product" />
        </ListItem>
        <ListItem button component={Link} to="/admin/list">
          <ListItemText primary="Product List" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
