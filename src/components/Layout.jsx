import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <Container maxWidth="xxl">
      
        <Navbar/>
        <Container maxWidth="xxl">
            <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
              <Sidebar/>  <Outlet/>
            </Box>
        </Container>
    </Container>
  )
}

export default Layout ;
