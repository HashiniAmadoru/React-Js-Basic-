import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";



function FormNew() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog add");
      history.push("/");
    });
    console.log(blog);
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
          <Grid container>
            <Grid xs={6} className="form-cover"></Grid>
            <Grid
              xs={6}
              sx={{
                '& .MuiTextField-root': { marginBottom:'15px'},
              }}
            >
              <h2 style={{ textAlign: "center" }}>Add New Blog</h2>
              <form onSubmit={handleSubmit} style={{padding: '10px'}}>
                
                  <TextField fullWidth 
                    id="outlined-basic"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Blog Title"
                    variant="outlined"
                  />
                
                
                  <TextField fullWidth
                    id="outlined-multiline-static"
                    label="Blog Body"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                
                <FormControl fullWidth>
                  <InputLabel id="author">Author</InputLabel>
                  <Select
                    labelId="author"
                    id="author"
                    value={author}
                    label="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                  >
                    <MenuItem value={"mario"}>Mario</MenuItem>
                    <MenuItem value={"yoshi"}>Yoshi</MenuItem>
                  </Select>
                </FormControl>

                <Button type="submit" variant="contained" size="small"  fullWidth style={{marginTop:'10px'}}>Add Blog</Button> 
              
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default FormNew;
