import React, { useState } from "react";

import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Link
} from "@mui/material";
import {   useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: Math.random(),
    email: "",
    password: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  console.log("User name:", user.name);
}

  const [errors, setErrors] = useState({});

  const SignupData = JSON.parse(localStorage.getItem("signupData")) || {}
  const email = SignupData.email 
  const password= SignupData.password
  
  console.log("Email",email);
  console.log("password",password);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    console.log("Validation errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 if (validate()) {
  if (email) {
    if (formData.email === email) {
      if(formData.password === password){
        localStorage.setItem("loginData", JSON.stringify(formData));
        console.log("User ID:", formData.userId);

      alert("Login successful!");
      navigate("/admin/list");

      }else{
        alert("password does not match")
      }
      
    } else {
      alert("Email doesn't match");
    }
  } else {
    alert("First Signup");
    navigate("/signup");
  }
} else {
  alert("Please fix the errors.");
}
  }
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}

            
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
