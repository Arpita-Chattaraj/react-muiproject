// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import {  MenuItem } from "@mui/material";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {useForm} from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const categories = [
//   { value: "", label: "-- Select Category --" },
//   { value: "electronics", label: "Electronics" },
//   { value: "fashion", label: "Fashion" },
//   { value: "home", label: "Home" },
//   { value: "books", label: "Books" },
// ];

// const Productadd = () => {
//   const { id } = useParams();
// console.log(id);
// const loginData=JSON.parse(localStorage.getItem("loginData"))

// const userId=loginData.userId

//   const [formData, setFormData] = useState({
//     id:Math.random,
//     userId:userId,
//     title: "",
//     price: "",
//     category: "",
//     body: "",
//   });

//   const [error, setError] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setError((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

// const validate = () => {
//   const newErrors = {};

//   if (!formData.title.trim()) {
//     newErrors.title = "Name is required";
//   }

//   if (!formData.price.trim()) {
//     newErrors.price = "Price is required";
//   } else if (isNaN(formData.price)) {
//     newErrors.price = "Invalid price";
//   }

//   if (!formData.category.trim()) {
//     newErrors.category = "Category is required";
//   }

//   if (!formData.body.trim()) {
//     newErrors.body = "Description is required";
//   } else if (formData.body.length < 3) {
//     newErrors.body = "Description must be at least 3 characters";
//   }

//   setError(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

// const handleSubmit = async(e) => {
//   e.preventDefault();

//   if (validate()) {
//     console.log(formData);
//     alert("Form submitted successfully!");
//     try{
//     const response=await axios.post("https://jsonplaceholder.typicode.com/posts",formData)
//     console.log("response",response);

//     // .then((response)=>{
//     //   console.log(response.data);

//     // })
//     // .catch((error)=>{
//     //   alert(error.message)
//     // })
//     setFormData({
//       title: "",
//       price: "",
//       category: "",
//       body: "",
//     });
//   }catch(error){
//     console.log(error);

//   }

//   } else {
//     alert("Please fix the errors");
//   }
// };

// const handleEditSubmit = (e) => {
//   e.preventDefault();
//   console.log("this is for edit");

// };

//   return (
//     <Box
//       sx={{
//         maxWidth: 500,
//         mx: "auto",
//         mt: 4,
//         p: 3,
//         border: "1px solid #ccc",
//         borderRadius: 2,
//       }}
//     >
//       <Typography variant="h5" mb={2}>
//         {id?"Edit product":"Add New Product"}

//       </Typography>
//       <form >
//         <TextField
//           fullWidth
//           label="Product Name"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           margin="normal"
//           required
//         />
//         {error.name && <p style={{ color: "red" }}>{error.title}</p>}

//         <TextField
//           fullWidth
//           label="Price"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           type="number"
//           margin="normal"
//           required
//         />
//         {error.price && <p style={{ color: "red" }}>{error.price}</p>}

//         <TextField
//   select
//   fullWidth
//   label="Category"
//   name="category"
//   value={formData.category}
//   onChange={handleChange}
//   margin="normal"
//   required
// >
//   {categories.map((option) => (
//     <MenuItem key={option.value} value={option.value}>
//       {option.label}
//     </MenuItem>
//   ))}
// </TextField>
// {error.category && <p style={{ color: "red" }}>{error.category}</p>}

//         <TextField
//           fullWidth
//           label="Description"
//           name="body"
//           value={formData.body}
//           onChange={handleChange}
//           multiline
//           rows={3}
//           margin="normal"
//         />
//         {error.description && <p style={{ color: "red" }}>{error.body}</p>}

//         <Button
//                     fullWidth
//                     type="submit"
//                     variant="contained"
//                     sx={{ mt: 2 }}
//                     onClick={id?handleEditSubmit:handleSubmit}

//                   >
//                     {id?"UPDATE":"SAVE"}
//                   </Button>
//       </form>
//     </Box>
//   );
// };

// export default Productadd;

import React, { useEffect, useState } from "react";
import API from "../../api/api";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const categories = [
  // { id: "", name: "-- Select Category --" },
  { id: "electronics", name: "Electronics" },
  { id: "fashion", name: "Fashion" },
  { id: "home", name: "Home" },
  { id: "books", name: "Books" },
];

const schema = yup.object().shape({
  title: yup.string().required("Product name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  category: yup.string().required("Category is required"),
  body: yup
    .string()
    .min(3, "Description must be at least 3 characters")
    .required("Description is required"),
});

const Productadd = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      price: "",
      category: "",
      body: "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchIdData = async () => {
        setLoading(true);
        try {
          const response = await API.get(`/products/${id}`);
          setEditData(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchIdData();
    }
  }, [id]);

  useEffect(() => {
    if (editData && Object.keys(editData).length > 0) {
      Object.keys(editData).forEach((key) => {
        console.log(key, editData[key]);
        setValue(key, editData[key]);
      });
    }
  }, [editData, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await API.put(`/products/${id}`, data);
        alert("Product updated successfully!");
      } else {
        await API.post("/products", data);
        alert("Product added successfully!");
        reset(); // clear form
        navigate("/admin/list");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
        {id ? "Edit Product" : "Add New Product"}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            // label="Product Name"
            {...register("title")}
            margin="normal"
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            fullWidth
            // label="Price"
            {...register("price")}
            type="number"
            margin="normal"
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="Age"
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
              value={watch("category")}
            >
              <MenuItem>----select Category----</MenuItem>
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <TextField
            select
            fullWidth
            // label="Category"
            {...register("category")}
            margin="normal"
            error={!!errors.category}
            helperText={errors.category?.message}
          >
            <MenuItem>----select Category----</MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField> */}

          <TextField
            fullWidth
            // label="Description"
            multiline
            rows={3}
            {...register("body")}
            margin="normal"
            error={!!errors.body}
            helperText={errors.body?.message}
          />

          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            {id ? "UPDATE" : "SAVE"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Productadd;
