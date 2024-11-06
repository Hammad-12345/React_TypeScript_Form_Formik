import {Box, Stack } from '@mui/material'
import React from 'react'

const FormPage = () => {
  return (
    <>
    <Stack sx={{
      minHeight:"100vh",
      border:"1px solid black",
      backgroundColor:"#15082beb",
      justifyContent:"center",
      alignItems:"center",
      gap:"16px",
      boxSizing:"border-box"
    }}>
      <Box
      sx={{fontFamily:"arial",fontSize:"18px",color:"white"}}
      
      ></Box>
      <Box sx={{
        width:"600px",
        border:"1px solid black"
      }}>
        <Stack sx={{
          flexDirection:"row"
        }}>
          

        </Stack>
      </Box>
    </Stack>
    </>
  )
}

export default FormPage
