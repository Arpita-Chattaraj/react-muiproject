import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Productadd = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
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
    if (!formData.price.trim()) {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price)) {
      newErrors.price = "Invalid price";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 3) {
      newErrors.description = "Description must be at least 3 characters";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        price: "",
        description: "",
      });
    } else {
      alert("Please fix the errors");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <TextField
          fullWidth
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          required
        />
        {error.price && <p style={{ color: "red" }}>{error.price}</p>}

        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          margin="normal"
        />
        {error.description && <p style={{ color: "red" }}>{error.description}</p>}

        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default Productadd;
