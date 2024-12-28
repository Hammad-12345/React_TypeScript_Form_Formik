import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "../Pages/FormText.css";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { basicschema } from "../FormSchema/Index";
import backgroundimage from "../Images/Background2.jpg";
import Layout from "./Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/joy/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
interface Formvalue {
  firstname: string;
  lastname: string;
  fathername: string;
  cnicno: string;
  mobileno: string;
  // password: string;
  // confirmpassword: string;
  gender: string;
}
const FormPage = () => {
  const [loading, updateloading] = useState(true);
  const [formloader, updateformloader] = useState(false);
  const [viewloader, updateviewloader] = useState(false);
  const [opensnacbar, updateopensnackbar] = useState(false);
  const [responsemessage, updateresponsemessage] = useState("");
  const [backgroundcolortoast, updatebackgroundcolortoast] =
    useState("#008047b8");
  const [form_animate, update_form_animate] = useState(true);
  const Navigate = useNavigate();
  const location = useLocation();
  const [data,updatedata] = useState<any>(location.state)
  console.log(data)
  const submit_profile_form = async (value: any) => {
    updateformloader(true);
    try {
      const res = await axios.post(
        `https://react-type-script-form-formik-xbkmbackend.vercel.app/Add_data`,
        value
      );
      console.log(res);
      const data = res.data as { status: number; message: string };
      if (data.status === 200) {
        updateresponsemessage(data.message);
        updatebackgroundcolortoast("#008047b8");
        setTimeout(() => {
          updateformloader(false);
        }, 1500);
        setTimeout(() => {
          updateopensnackbar(true);
        }, 3000);
        setTimeout(() => {
          update_form_animate(false);
        }, 5500);
        setTimeout(() => {
          Navigate("/viewprofile");
        }, 7000);
      } else {
        updateresponsemessage(data.message);
        updatebackgroundcolortoast("#ff000080");
        setTimeout(() => {
          updateformloader(false);
        }, 1500);
        setTimeout(() => {
          updateopensnackbar(true);
        }, 2500);
      }
    } catch (error: any) {
      updateresponsemessage("Server Error");
      updatebackgroundcolortoast("#ff000080");
      setTimeout(() => {
        updateformloader(false);
      }, 1500);
      setTimeout(() => {
        updateopensnackbar(true);
      }, 3000);
    }
  };
  const update_profile_form = async (value: any) => {
    updateformloader(true);
    try {
      const res = await axios.put(`http://192.168.100.158:8080/Update_Data`, {
        value,
        id: data._id,
      });
      console.log(res);
      const response = res.data as { status: number; message: string };
      if (response.status === 200) {
        updateresponsemessage(response.message);
        updatebackgroundcolortoast("#008047b8");
        setTimeout(() => {
          updateformloader(false);
          // updatedata(null)
        }, 1500);
        setTimeout(() => {
          updateopensnackbar(true);
        }, 3000);
        setTimeout(() => {
          update_form_animate(false);
        }, 5500);
        setTimeout(() => {
          Navigate("/viewprofile");
        }, 7000);
      } else {
        updateresponsemessage(data.message);
        updatebackgroundcolortoast("#ff000080");
        setTimeout(() => {
          updateformloader(false);
        }, 1500);
        setTimeout(() => {
          updateopensnackbar(true);
        }, 2500);
      }
    } catch (error: any) {
      updateresponsemessage("Server Error");
      updatebackgroundcolortoast("#ff000080");
      setTimeout(() => {
        updateformloader(false);
      }, 1500);
      setTimeout(() => {
        updateopensnackbar(true);
      }, 2500);
    }
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik<Formvalue>({
    initialValues: {
      firstname: data != null ? data.firstname : "",
      lastname: data != null ? data.lastname : "",
      fathername: data != null ? data.fathername : "",
      cnicno: data != null ? data.cnicno : "",
      mobileno: data != null ? data.mobileno : "",
      // password: data != null ? data.password : "",
      // confirmpassword: data != null ? data.password : "",
      gender: data != null ? data.gender : "",
    },
    validationSchema: basicschema,
    onSubmit: (value) => {
      data != null ? update_profile_form(value) : submit_profile_form(value);
    },
  });
  const handleReset = () => {
    resetForm();
  };
  const handleClose = () => {
    updateopensnackbar(false);
  };
  const view_detail = () => {
    updateviewloader(true);
    setTimeout(() => {
      updateviewloader(false);
    }, 1500);
    setTimeout(() => {
      update_form_animate(false);
    }, 2500);
    setTimeout(() => {
      Navigate("/viewprofile");
    }, 3500);
  };
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              component={"div"}
              className={`${form_animate ? "design_show" : "close_form"}`}
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
                gap: "16px",
              }}
            >
              <Box
                sx={{ fontFamily: "arial", fontSize: {sm:"20px",xs:"15px"}, color: "white" }}
              >
                React Typescript Form Using Formik
              </Box>
              <Box
                component={"div"}
                sx={{
                  // width: "100%",
                  maxWidth:"750px",
                  // border: "1px solid white",
                  display: "flex",
                  flexDirection: "column",
                  paddingX:{md:"0px",xs:"20px"}
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "15px",
                    border: "1px solid white",
                    padding: "18px 15px",
                  }}
                  component={"form"}
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="firstname"
                      sx={{ color: "white" }}
                    >
                      First Name
                    </Typography>
                    <TextField
                      id="firstname"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your First Name Here"
                      variant="outlined"
                      className={`${
                        errors.firstname && touched.firstname
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.firstname && touched.firstname && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.firstname}
                      </Box>
                    )}
                  </Stack>
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="lastname"
                      sx={{ color: "white" }}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      id="lastname"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Last Name Here"
                      variant="outlined"
                      className={`${
                        errors.lastname && touched.lastname
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.lastname && touched.lastname && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.lastname}
                      </Box>
                    )}
                  </Stack>
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="FatherName"
                      sx={{ color: "white" }}
                    >
                      Father Name
                    </Typography>
                    <TextField
                      id="FatherName"
                      name="fathername"
                      value={values.fathername}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Father Name Here"
                      variant="outlined"
                      className={`${
                        errors.fathername && touched.fathername
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.fathername && touched.fathername && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.fathername}
                      </Box>
                    )}
                  </Stack>
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="CnicNo"
                      sx={{ color: "white" }}
                    >
                      Cnic No
                    </Typography>
                    <TextField
                      id="CnicNo"
                      name="cnicno"
                      value={values.cnicno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Cnic No Here"
                      variant="outlined"
                      type="text"
                      className={`${
                        errors.cnicno && touched.cnicno
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.cnicno && touched.cnicno && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.cnicno}
                      </Box>
                    )}
                  </Stack>
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="MobileNo"
                      sx={{ color: "white" }}
                    >
                      Mobile No
                    </Typography>
                    <TextField
                      id="MobileNo"
                      name="mobileno"
                      value={values.mobileno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Mobile No Here"
                      variant="outlined"
                      type="text"
                      className={`${
                        errors.mobileno && touched.mobileno
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.mobileno && touched.mobileno && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.mobileno}
                      </Box>
                    )}
                  </Stack>
                  {/* <Stack sx={{ flex: "300px", gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="Password"
                      sx={{ color: "white" }}
                    >
                      Password
                    </Typography>
                    <TextField
                      id="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Password Here"
                      variant="outlined"
                      type="password"
                      className={`${
                        errors.password && touched.password
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.password && touched.password && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.password}
                      </Box>
                    )}
                  </Stack>
                  <Stack sx={{ flex: "300px", gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="ConfirmPassword"
                      sx={{ color: "white" }}
                    >
                      Confirm Password
                    </Typography>
                    <TextField
                      id="ConfirmPassword"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Your Confirm Password Here"
                      variant="outlined"
                      type="password"
                      className={`${
                        errors.confirmpassword && touched.confirmpassword
                          ? "Input_Error"
                          : "Input_Field"
                      }`}
                    />
                    {errors.confirmpassword && touched.confirmpassword && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.confirmpassword}
                      </Box>
                    )}
                  </Stack> */}
                  <Stack sx={{ flex:{md:'300px',xs:"100%"}, gap: "8px" }}>
                    <Typography
                      component={"label"}
                      htmlFor="Gender"
                      sx={{ color: "white" }}
                    >
                      Gender
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={values.gender}
                      name="gender"
                      className={`radio_group`}
                      sx={{
                        flexDirection: "row",
                        border:
                          errors.gender && touched.gender
                            ? "1px solid red"
                            : "1px solid white",
                        padding: "8px 10px",
                        color: "white",
                        borderRadius: "4px",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                    </RadioGroup>
                    {errors.gender && touched.gender && (
                      <Box
                        sx={{
                          color: "red",
                          fontSize: "15px",
                          marginTop: "-0px",
                          fontFamily: "arial",
                        }}
                      >
                        {errors.gender}
                      </Box>
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      flex:{md:'300px',xs:"100%"},
                      justifyContent: "end",
                      flexDirection: {sm:"row",xs:"column"},
                      gap: "15px",
                    }}
                  >
                    {data != null ? (
                      <>
                       <Button
                          onClick={view_detail}
                          variant="outlined"
                          sx={{
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
                          {viewloader ? (
                            <>
                              <CircularProgress
                                size="sm"
                                color="primary"
                                variant="soft"
                              />{" "}
                              loading
                            </>
                          ) : (
                            "View Detail"
                          )}
                        </Button>
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{
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
                          {formloader ? (
                            <>
                              <CircularProgress
                                size="sm"
                                color="primary"
                                variant="soft"
                              />{" "}
                              loading
                            </>
                          ) : (
                            "Update"
                          )}
                        </Button>
                        
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={view_detail}
                          variant="outlined"
                          sx={{
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
                          {viewloader ? (
                            <>
                              <CircularProgress
                                size="sm"
                                color="primary"
                                variant="soft"
                              />{" "}
                              loading
                            </>
                          ) : (
                            "View Detail"
                          )}
                        </Button>
                        <Button
                          onClick={handleReset}
                          variant="outlined"
                          sx={{
                            padding: "8px 30px",
                            color: "white",
                            border: "1px solid white",
                            ":hover": {
                              backgroundColor: "white",
                              color: "black",
                            },
                          }}
                        >
                          Reset
                        </Button>
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{
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
                          {formloader ? (
                            <>
                              <CircularProgress
                                size="sm"
                                color="primary"
                                variant="soft"
                              />{" "}
                              loading
                            </>
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
};

export default FormPage;
