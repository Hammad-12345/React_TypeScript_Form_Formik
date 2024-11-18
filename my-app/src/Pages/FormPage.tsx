import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import '../Pages/FormText.css'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
import { basicschema } from '../FormSchema/Index';
interface Formvalue {
  name: string,
  fathername: string,
  cnicno: string,
  mobileno: string,
  password: string,
  confirmpassword: string,
  gender: string
}
const FormPage = () => {
  const { values,errors,touched, handleChange, handleSubmit,handleBlur, resetForm } = useFormik<Formvalue>({
    initialValues: {
      name: "",
      fathername: "",
      cnicno: "",
      mobileno: "",
      password: "",
      confirmpassword: "",
      gender: ""
    },
    validationSchema: basicschema,
    onSubmit: (value) => {
      console.log(value)
    },
  });
  const handleReset = () => {
    resetForm()
  }
  console.log(errors)
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
          sx={{ fontFamily: "arial", fontSize: "20px", color: "white" }}

        >React Typescript Form Using Formik</Box>
        <Box sx={{
          width: "750px",
          // border: "1px solid white",
          display: "flex",
          flexDirection: "column"
        }}>
          <Stack sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "15px",
            border: "1px solid white",
            padding: "18px 15px",

          }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='Name' sx={{ color: "white" }}>Name</Typography>
              <TextField id="Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  placeholder='Enter Your Name Here' variant="outlined" className={`${errors.name && touched.name ? "Input_Error" : "Input_Field"}`} />
              {errors.name && touched.name && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.name}</Box>}

            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='FatherName' sx={{ color: "white" }}>Father Name</Typography>
              <TextField id="FatherName" name='fathername' value={values.fathername} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Father Name Here' variant="outlined" className={`${errors.fathername && touched.fathername ? "Input_Error" : "Input_Field"}`} />
              {errors.fathername && touched.fathername && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.fathername}</Box>}

            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='CnicNo' sx={{ color: "white" }}>Cnic No</Typography>
              <TextField id="CnicNo" name='cnicno' value={values.cnicno} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Cnic No Here' variant="outlined" type='text' className={`${errors.cnicno && touched.cnicno ? "Input_Error" : "Input_Field"}`} />
              {errors.cnicno && touched.cnicno && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.cnicno}</Box>}

            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='MobileNo' sx={{ color: "white" }}>Mobile No</Typography>
              <TextField id="MobileNo" name='mobileno' value={values.mobileno} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Mobile No Here' variant="outlined" type='text' className={`${errors.mobileno && touched.mobileno ? "Input_Error" : "Input_Field"}`} />
              {errors.mobileno && touched.mobileno && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.mobileno}</Box>}

            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='Password' sx={{ color: "white" }}>Password</Typography>
              <TextField id="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Password Here' variant="outlined" type='password' className={`${errors.password && touched.password ? "Input_Error" : "Input_Field"}`} />
              {errors.password && touched.password && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.password}</Box>}

            </Stack>
            <Stack sx={{ flex: "300px", gap: "8px" }}>
              <Typography component={"label"} htmlFor='ConfirmPassword' sx={{ color: "white" }}>Confirm Password</Typography>
              <TextField id="ConfirmPassword" name='confirmpassword' value={values.confirmpassword} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Your Confirm Password Here' variant="outlined" type='password' className={`${errors.confirmpassword && touched.confirmpassword ? "Input_Error" : "Input_Field"}`} />
              {errors.confirmpassword && touched.confirmpassword && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.confirmpassword}</Box>}

            </Stack>
            <Stack sx={{ flex: "100%", gap: "8px" }}>
              <Typography component={"label"} htmlFor='Gender' sx={{ color: "white" }}>Gender</Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={values.gender}
                name="gender"
                className={`radio_group`}
                sx={{
                  flexDirection: "row",
                  border:errors.gender  && touched.gender ? "1px solid red" : "1px solid white",
                  padding: "10px 10px",
                  color: "white",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
              </RadioGroup>
              {errors.gender && touched.gender && <Box sx={{color:"red",fontSize:"15px",marginTop:"-0px",fontFamily:"arial"}}>{errors.gender}</Box>}

            </Stack>
            <Stack sx={{
              flex: "100%",
              justifyContent: "end",
              flexDirection: "row",
              gap: "15px"
            }}>
              <Button onClick={handleReset} variant="outlined" sx={{
                padding: "8px 30px", color: "white", border: "1px solid white",
                ":hover": {
                  backgroundColor: "white",
                  color: "black"
                }
              }}>Reset</Button>
              <Button type='submit' variant="outlined" sx={{
                padding: "8px 30px", color: "white", border: "1px solid white",
                ":hover": {
                  backgroundColor: "white",
                  color: "black"
                }
              }}>Submit</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default FormPage
