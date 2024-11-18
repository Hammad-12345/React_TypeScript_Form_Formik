import * as yup from 'yup'
const CommonRegexForNames=/^[a-zA-Z ]+$/;
const Cnicno = /^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/;
const Mobileno=/^[0-9]{4}[-]{1}[0-9]{7}$/;
export const basicschema =yup.object().shape({
    name:yup.string().min(3,"Minimum 3 characters required").matches(CommonRegexForNames,{message:"Enter Only Alphabets"}).required("Enter Your Name Here"),
    fathername:yup.string().min(3,"Minimum 3 characters required").matches(CommonRegexForNames,{message:"Enter Only Alphabets"}).required("Enter Your Father Name Here"),
    cnicno:yup.string().length(15, "Must be exactly 15 digits including (-)").matches(Cnicno,{message:"Follow this pattern (Only Numbers) e.g:65784-9098767-7"}).required("Enter Your Cnic No"),
    mobileno:yup.string().length(12, "Must be exactly 12 digits including (-)").matches(Mobileno,{message:"Follow this pattern (Only Numbers) e.g:0315-7899876"}).required("Enter Your Mobile Number"),
    password:yup.string().required("Enter Your Password"),
    confirmpassword:yup.string().oneOf([yup.ref("password")],"Password Must Match").required("Enter Your Confirm Password"),
    gender:yup.string().required("Select Gender")
    
})