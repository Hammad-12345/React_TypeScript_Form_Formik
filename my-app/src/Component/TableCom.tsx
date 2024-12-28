import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";
const TableCom = (props: any) => {
  const Navigate = useNavigate();
  const [Profile_data, update_profile_data] = useState<any>([]);
  const [response, updateresponse] = useState("");
  const [delete_loader_id, update_delete_loader_id] = useState<string>("");
  const [edit_loader_id, update_edit_loader_id] = useState<string>("");
  console.log(Profile_data);
  function createData(
    firstname: string,
    lastname: string,
    fathername: string,
    cnicno: string,
    mobileno: string,
    gender: string
  ) {
    return { firstname, lastname, fathername, cnicno, mobileno, gender };
  }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  const GetData = async () => {
    try {
      const res = await axios.get("http://192.168.100.158:8080/Get_data");
      const Form_Data = res.data as {
        status: number;
        data: any;
        message: string;
      };
      if (Form_Data.status === 200) {
        update_profile_data([...Form_Data.data]);
        updateresponse("");
      } else {
        update_profile_data([]);
        updateresponse(Form_Data.message);
      }
    } catch (error: any) {
      props.updateresponsemessage("Server Error");
      updateresponse("Server Error");
      props.updatebackgroundcolortoast("#ff000080");
      setTimeout(() => {
        props.updateopensnackbar(true);
      }, 500);
    }
  };
  const delete_detail = async (ID: string) => {
    update_delete_loader_id(ID);
    try {
      const deletedata = await axios.delete(
        `http://192.168.100.158:8080/Delete_data/${ID}`
      );
      console.log(deletedata);
      const res_delete = deletedata.data as {
        status: number;
        message: string;
      };
      if (res_delete.status === 200) {
        props.updateresponsemessage(res_delete.message);
        props.updatebackgroundcolortoast("#008047b8");
        setTimeout(() => {
          update_delete_loader_id("");
        }, 1000);
        setTimeout(() => {
          props.updateopensnackbar(true);
        }, 2000);
        setTimeout(() => {
          GetData();
        }, 3000);
      } else {
        props.updateresponsemessage(res_delete.message);
        props.updatebackgroundcolortoast("#ff000080");
        setTimeout(() => {
          update_delete_loader_id("");
        }, 1500);
        setTimeout(() => {
          props.updateopensnackbar(true);
        }, 2500);
      }
    } catch (error: any) {
      props.updateresponsemessage("Server Error");
      props.updatebackgroundcolortoast("#ff000080");
      setTimeout(() => {
        update_delete_loader_id("");
      }, 1500);
      setTimeout(() => {
        props.updateopensnackbar(true);
      }, 2500);
    }
  };
  const edit_data = async (data: any) => {
    update_edit_loader_id(data._id);
    setTimeout(() => {
      update_edit_loader_id("");
    }, 1500);
    setTimeout(() => {
      props.update_form_animate(false);
    }, 3000);
    setTimeout(() => {
      Navigate("/", { state: data });
    }, 4500);
  };
  useEffect(() => {
    GetData();
  }, []);
  const getTableHeight = () => {
    const rowCount = Profile_data.length;
    // alert(rowCount)
    const maxHeight = 1000; // max height for table
    const rowHeight = 50; // approximate height for each row
    return rowCount * rowHeight > maxHeight ? maxHeight : rowCount * rowHeight;
  };
  return (
    <>
      <TableContainer
        sx={{ backgroundColor: "transparent", borderRadius: "0px",maxWidth:"1000px",margin:"auto",
          // overflowY:"scroll",
          maxHeight:"450px"
          }}
        component={Paper}
      >
        <Table
          sx={{
            minWidth: 650,
            // maxWidth: "1000px",
            // overflowY:"scroll",
            border: "1px solid #e7e7e75c",
            borderRadius: "0px",
            margin:"auto"
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#191919ba" }}>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                First Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Last Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Father Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Cnic No
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Mobile No
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "arial",
                  color: "white",
                  borderRight: "1px solid #e7e7e75c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontFamily: "arial", color: "white", fontSize: "15px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {
              loader_table ? <></>:<></>
            } */}
            {Profile_data.length > 0 ? (
              <>
                {Profile_data.map((row: any) => (
                  <TableRow
                    key={row.cnicno}
                    sx={{ backgroundColor: "#0f0f0f00" }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.firstname}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.lastname}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.fathername}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.cnicno}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.mobileno}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {row.gender}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "arial",
                        color: "white",
                        borderRight: "1px solid #e7e7e75c",
                        fontSize: "15px",
                        fontWeight: "500",
                        display: "flex",
                        flexDirection:{md:"row",xs:"column"},
                        gap: {md:"6px",xs:"10px"},
                        justifyContent:"center"
                      }}
                    >
                      <Button
                        onClick={() => edit_data(row)}
                        variant="outlined"
                        sx={{
                          padding: "4px 10px",
                          color: "white",
                          border: "1px solid blue",
                          backgroundColor: "blue",
                          // ":hover": {
                          //   backgroundColor: "white",
                          //   color: "black",
                          // },
                        }}
                      >
                        {edit_loader_id === row._id ? (
                          <>
                            <CircularProgress
                              size="sm"
                              color="primary"
                              variant="soft"
                            />{" "}
                          </>
                        ) : (
                          "Edit"
                        )}
                      </Button>
                      <Button
                        onClick={() => delete_detail(row._id)}
                        variant="outlined"
                        sx={{
                          padding: "4px 10px",
                          color: "white",
                          border: "1px solid red",
                          backgroundColor: "red",
                          // ":hover": {
                          //   backgroundColor: "white",
                          //   color: "black",
                          // },
                        }}
                      >
                        {delete_loader_id === row._id ? (
                          <>
                            <CircularProgress
                              size="sm"
                              color="primary"
                              variant="soft"
                            />{" "}
                          </>
                        ) : (
                          "Delete"
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <>
                <TableRow
                  sx={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      fontFamily: "arial",
                      fontWeight: "bold",
                      fontSize: "15px",
                      textAlign:"center"
                    }}
                  >
                    {response}
                  </Box>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCom;
