import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const Handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length !== 7) {
      newErrors.password = "Password must be 7 characters";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      alert("Please fix the errors");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#a44f4fff",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Login Form
      </Typography>

      <form onSubmit={Handlesubmit}>
        <div>
          <label>Enter your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="user name"
            onChange={Handlechange}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <br />

        <div>
          <label>Enter your email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="user email"
            onChange={Handlechange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <br />

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={Handlechange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <Button variant="contained" color="submit" type="submit">
          submit
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
