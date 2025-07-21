import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

// Sample data (you can later fetch this from API or props)
const productData = [
  {
    name: "Product A",
    price: "₹499",
    description: "This is a description for Product A.",
  },
  {
    name: "Product B",
    price: "₹899",
    description: "This is a description for Product B.",
  },
  {
    name: "Product C",
    price: "₹1299",
    description: "This is a description for Product C.",
  },
];

const Productlist = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>

      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Productlist;
