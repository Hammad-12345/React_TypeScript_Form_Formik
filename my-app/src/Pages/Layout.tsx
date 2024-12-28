import { Stack } from "@mui/material";
import React from "react";
import backgroundimage from '../Images/Background2.jpg'
import CircularProgress from '@mui/joy/CircularProgress';

const Layout = () => {
  return (
    <>
      <Stack
        sx={{
          height:"100vh",
          border: "1px solid black",
          backgroundColor: "#101010eb",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundBlendMode: "overlay",
        }}
      >
        <CircularProgress color="primary" variant="soft" sx={{marginTop:"-55px"}} />
      </Stack>
    </>
  );
};

export default Layout;
