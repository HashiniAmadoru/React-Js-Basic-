import React,{useEffect, useState} from 'react'
import CreateList from './CreateList';
import './main.css';


function Listone() {

  const [blogs,setBlogs] = useState(null);
  const [ispending,setIsPending] = useState(true);
  
  useEffect (() => {
   setTimeout(() => {
    fetch('http://localhost:3000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data)
      setIsPending(false)
      console.log(data);
    });
   }, 1000)
    // return () => console.log('cleanup');
  }, [])

 

  return (
    <div className="cover">
      
      {ispending && <div>Loading... </div>}
    {blogs && <CreateList blogs={blogs} title={'All Blogs'} />}
 
 
    </div>
  )
}

export default Listone