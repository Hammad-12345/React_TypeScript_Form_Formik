import * as yup from 'yup'
const CommonRegexForNames=/^[a-zA-Z]+$/;
const Regexforfathername=/^[a-zA-Z ]+$/;
const Cnicno = /^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/;
const Mobileno=/^[0-9]{4}[-]{1}[0-9]{7}$/;
export const basicschema =yup.object().shape({
    firstname:yup.string().min(3,"Minimum 3 characters required").matches(CommonRegexForNames,{message:"Enter Only Alphabets are allowed and follow this pattern e.g (babar) not include space"}).required("Enter Your Firstname Here"),
    lastname:yup.string().min(3,"Minimum 3 characters required").matches(CommonRegexForNames,{message:"Enter Only Alphabets are allowed and follow this pattern e.g (babar) not include space"}).required("Enter Your Lastname Here"),
    fathername:yup.string().min(3,"Minimum 3 characters required").matches(Regexforfathername,{message:"Enter Only Alphabets"}).required("Enter Your Father Name Here"),
    cnicno:yup.string().matches(Cnicno,{message:"Follow this pattern (Only Numbers and length of number is 15 including dash) e.g:65784-9098767-7"}).required("Enter Your Cnic No"),
    mobileno:yup.string().matches(Mobileno,{message:"Follow this pattern (Only Numbers and length of number is 12 including dash) e.g:0315-7899876"}).required("Enter Your Mobile Number"),
    // password:yup.string().required("Enter Your Password"),
    // confirmpassword:yup.string().oneOf([yup.ref("password")],"Password Must Match").required("Enter Your Confirm Password"),
    gender:yup.string().required("Select Gender")
    
})