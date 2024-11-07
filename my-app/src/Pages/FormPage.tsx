import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
const FormPage = () => {
  return (
    <>
      <Stack sx={{
        minHeight: "100vh",
        border: "1px solid black",
        backgroundColor: "#15082beb",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        boxSizing: "border-box"
      }}>
        <Box
          sx={{ fontFamily: "arial", fontSize: "18px", color: "white" }}

        >React Typescript Form Using Formik</Box>
        <Box sx={{
          width: "750px",
          border: "1px solid black"
        }}>
          <Stack sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "15px",
            border: "1px solid white",
            padding: "10px 15px",

          }}>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='Name' sx={{ color: "white" }}>Name</Typography>
              <TextField id="Name" label="Name" variant="outlined" />
            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='FatherName' sx={{ color: "white" }}>Father Name</Typography>
              <TextField id="FatherName" label="Father Name" variant="outlined" />
            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='CnicNo' sx={{ color: "white" }}>Cnic No</Typography>
              <TextField id="CnicNo" label="Cnic No" variant="outlined" type='number' />
            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='MobileNo' sx={{ color: "white" }}>Mobile No</Typography>
              <TextField id="MobileNo'" label="Mobile No" variant="outlined" type='number' />
            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='Password' sx={{ color: "white" }}>Password</Typography>
              <TextField id="Password" label="Password" variant="outlined" type='password' />
            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='ConfirmPassword' sx={{ color: "white" }}>Confirm Password</Typography>
              <TextField id="ConfirmPassword" label="Confirm Password" variant="outlined" type='password' />
            </Stack>
            {/* <Box sx={{flex:"1",border:"1px solid white"}}></Box> */}
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default FormPage
