import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";
import axios from "axios";

// Simple product data
const rows = [
  { name: "Cake", fat: 5, carbs: 30, protein: 3 },
  { name: "Ice Cream", fat: 10, carbs: 40, protein: 4 },
  { name: "Cookie", fat: 8, carbs: 25, protein: 2 },
];

const Productlist = () => {
  const[productlist,setProductlist]=useState([])
  useEffect(()=>{ 
    try{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((Response)=>{
        // console.log(Response);
        setProductlist(Response.data)
        
      })
      .catch((error)=>{
        console.log(error);
        alert(error.message)
        

      }

      )
      

    }catch(error){
      console.log(error);
      alert(error.message)
      
    }
  },[])
  console.log("productlist", productlist);
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell colSpan={3}>Title</TableCell>
            <TableCell colSpan={3}>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productlist.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell colSpan={3}>{item.title}</TableCell>
              <TableCell colSpan={3}>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Productlist;
