import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length !== 7) {
      newErrors.password = "Password must be 7 characters";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
        phone: "",
        password: "",
        confirmPassword: "",
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
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Signup Form
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
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="enter your number"
            value={formData.phone}
            onChange={Handlechange}
          />
          {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
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

        <br />

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="enter your confirm password"
            value={formData.confirmPassword}
            onChange={Handlechange}
          />
          {error.confirmPassword && (
            <p style={{ color: "red" }}>{error.confirmPassword}</p>
          )}
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default Signup;
