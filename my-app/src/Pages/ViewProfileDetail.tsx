import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import backgroundimage from "../Images/Background2.jpg";
import TableCom from "../Component/TableCom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";
const ViewProfileDetail = () => {
  const Navigate = useNavigate()
  const [loading, updateloading] = useState(true);
  const [tableloader, updatetableloader] = useState(false);
  const [opensnacbar, updateopensnackbar] = useState(false);
  const [responsemessage, updateresponsemessage] = useState("");
  const [backgroundcolortoast, updatebackgroundcolortoast] =
    useState("#008047b8");
  const [form_animate, update_form_animate] = useState(true);
  const handleClose = () => {
    updateopensnackbar(false);
  };
  const Back_To_Form = () =>
  {
    updatetableloader(true)
    setTimeout(() => {
      updatetableloader(false)
    }, 1500);
    setTimeout(() => {
      update_form_animate(false)
    }, 3000)
    setTimeout(() => {
      Navigate('/')
    }, 4500);
  }
  useEffect(() => {
    setTimeout(() => {
      updateloading(false);
    }, 2500);
  }, []);
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Snackbar
        open={opensnacbar}
        autoHideDuration={2000}
        onClose={handleClose}
        message={responsemessage}
        action={action}
        className="snackbar"
        sx={{
          " .MuiSnackbarContent-root": {
            backgroundColor: `${backgroundcolortoast}`,
            fontSize: "14px",
            " div": {
              padding: "0px",
            },
          },
          position: "fixed",
          top: "10px",
          right: "10px !important",
          bottom: "auto !important",
          left: "auto !important",
        }}
      />
      {loading ? (
        <>
          <Layout />
        </>
      ) : (
        <>
          <Stack
            sx={{
              minHeight: "100vh",
              border: "1px solid black",
              backgroundColor: "#101010eb",
              boxSizing: "border-box",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundImage: `url(${backgroundimage})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundBlendMode: "overlay",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                // position: "absolute",
                // top: "20%",
                // // left: "50%",
                // width: "100%",
              }}
              className={`${form_animate ? "design_show" : "close_form"}`}
            >
              <Typography
                component={"span"}
                sx={{ color: "white", fontSize: "20px", alignSelf: "center" }}
              >
                View Profile Detail
              </Typography>
              <Box
                sx={{
                  paddingX: { lg: "0px", xs: "20px" },
                }}
              >
                <TableCom
                  updateopensnackbar={updateopensnackbar}
                  updateresponsemessage={updateresponsemessage}
                  updatebackgroundcolortoast={updatebackgroundcolortoast}
                  update_form_animate={update_form_animate}
                />
              </Box>
              <Box sx={{
                // width:{lg:"1000px",xs:"100%"},
                // margin:"auto",
                // display:"flex",
                // justifyContent:"end",
                // border:"1px solid white",
                alignSelf:"center",
              }}>
                <Button
                  onClick={() => Back_To_Form()}
                  variant="outlined"
                  sx={{
                    alignSelf: "end",
                    padding: "8px 30px",
                    color: "white",
                    border: "1px solid white",
                    display: "flex",
                    gap: "12px",
                    ":hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  {tableloader ? (
                    <>
                      <CircularProgress
                        size="sm"
                        color="primary"
                        variant="soft"
                      />{" "} loading
                    </>
                  ) : (
                    "Back To Form"
                  )}
                </Button>
              </Box>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
};

export default ViewProfileDetail;
