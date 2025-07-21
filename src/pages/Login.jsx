import React, { useState } from "react";
import { Box, Button, List, TextField, Typography } from "@mui/material";
import { Password } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", formData);
    // Optionally reset
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>
        LOGIN
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label=" Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={formData.Password}
          onChange={handleChange}
          
          
          margin="normal"
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
        
      </form>
      
      
    </Box>
    
  );
};

export default Login;




