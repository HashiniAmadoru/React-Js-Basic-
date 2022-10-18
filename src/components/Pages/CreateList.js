import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CreateList({ blogs, title }) {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          
        >
           <h1 className="title">{title}</h1>
          <Grid xs={12} container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center">
         
          {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h4>Writen BY: {blog.author}</h4>
          </Link>
        </div>
      ))} */}
       {blogs.map((blog) => (
            <Card sx={{ margin:'20px', padding: '5px' }} key={blog.id}>
            <Link to={`/blogs/${blog.id}`} style={{textDecoration: 'none'}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="blog-title">
                {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="blog-author">
                Writen BY: <b>{blog.author}</b>
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small"  fullWidth>OPEN</Button>
              </CardActions>
              </Link>
            </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
      
      
    </div>
  );
}

export default CreateList;
