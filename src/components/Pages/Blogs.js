import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';

function Blogs() {
  const { id } = useParams();

  const { data: blog } = useFetch("http://localhost:3000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 10,
            width: "100%",
            height: "100vh",
          },
        }}
      >
        <Paper elevation={3}>
          <Grid container >
            <Grid xs={6} className="form-cover"></Grid>
            <Grid  className="form-inside"
              xs={6}
              sx={{
                "& .MuiTextField-root": { marginBottom: "15px" },
              }}
            >
              <div >
               
                {blog && (
                 <div>
                    <h2 style={{ textAlign: "center" }}>{blog.title}</h2>
                    <DeleteIcon style={{float: 'right', cursor: 'pointer', color:'red'}} onClick={handleClick}></DeleteIcon>
                    {/* <button>DELETE</button> */}
                    <p style={{fontWeight:'500'}}>Written by : -  <span style={{textTransform: 'uppercase'}}>{blog.author}</span></p>
                    
                    <div>{blog.body}</div>
                   
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default Blogs;
