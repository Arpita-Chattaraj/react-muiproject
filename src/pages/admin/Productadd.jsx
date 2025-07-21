import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Productadd = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
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
    setFormData({ name: "", price: "", description: "" });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
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
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default Productadd;
