
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Grid, Typography, Card, TextField, Button } from "@mui/material";



function Update() {
   let {courseId} = useParams();
   const [course,setCourse] = useState(null);

   useEffect(()=> {
      axios.get(`http://localhost:3000/admin/courses/${courseId}`, {
         method : "GET",
         headers : {
            "authorization" : "Bearer " + localStorage.getItem("token")
         }
      }).then(res=> {
         setCourse(res.data.course);
      })
   }, [courseId]);
   if(!course) {
      return <div style={{height : "100vh", justifyContent : "center", display:"flex", flexDirection : "column"}} >
      Loading....

      </div>
   }

   return (
      <div>
      <GreyTopper title = {course.title}/>
      <Grid container >
      <Grid item lg = {8} md  = {12} sm = {12}>
         <UpdateCard course = {course} setCourse = {setCourse}/>
      </Grid>
      <Grid item lg = {4} md = {12} sm = {12}>
         <CourseCard course = {course}/>
      </Grid>

      </Grid>


      </div>
   )
}

function GreyTopper ({title}) {
   return <div style = {{height : 250,zIndex: 0, backgroundColor : "#212121", top : 0, width : "100vw", display : "flex", flexDirection : "column", marginBottom : -250}}>
<div style={{height : 250,  display : "flex", justifyContent : "center", flexDirection : "column"}}>
<div>
   <Typography variant={'h6'} style={{ textAlign : "center", color: "white", fontWeight: 600, }}>
      {title}
   </Typography>
</div>

</div>
</div>
}

function UpdateCard({course,setCourse}) {
   const [title,setTitle] = useState(course.title);
   const[description,setDescription] = useState(course.description);
   const[image, setImage] = useState(course.imageLink);
   const[price,setPrice]= useState(course.price);


   return <div style={{display : "flex", justifyContent : "center", marginTop : 160}} >
      <Card variant={"outlined"} style={{maxWidth : 600}} >
         <div  style={{padding : 20}}>
         <Typography style={{marginBottom : 10}}>Update course details</Typography>
         <TextField
         value={title}
         style={{marginBottom : 10}}
         onChange={(e)=> {
            setTitle(e.target.value)

         }}
         fullWidth ={true}
         label= "Title"
         name=" Title"
         type="text"
         id="title"
         autoComplete="new - title"
         variant= {"outlined"} 
         />
         <TextField
         value={description}
         style={{marginBottom : 10}}
         onChange={(e)=> {
            setDescription(e.target.value)

         }}
         fullWidth ={true}
         label= "Description"
         name=" DES"
         type="text"
         id="desc"
         autoComplete="new - description"
         variant= {"outlined"} 
         />
         <TextField
         value={image}
         style={{marginBottom : 10}}
         onChange={(e)=> {
            setImage(e.target.value)

         }}
         fullWidth ={true}
         label= "ImageLink"
         name=" img"
         type="text"
         id="img"
         autoComplete="new - imgLink"
         variant= {"outlined"} 
         />
         <TextField
         value={price}
         style={{marginBottom : 10}}
         onChange={(e)=> {
            setPrice(e.target.value)

         }}
         fullWidth ={true}
         label= "Price"
         name=" price"
         type="text"
         id="price"
         autoComplete="new - price"
         variant= {"outlined"} 
         />

         <Button
         variant={"contained"}
         onClick={()=> {
            axios.put(`http://localhost:3000/admin/courses/${course._id}`, {
               title : title,
               description : description,
               imageLink : image,
               published : true,
               price
            }, {
               headers : {
                  "Content-type" : "application/json",
                  "authorization" : "Bearer " + localStorage.getItem("token")

               }
            });
            let updatedCourse = {
               _id : course._id,
               title : title,
               description : description,
               imageLink : image,
               price 

            };
            setCourse(updatedCourse)
         }}
         > Update Course</Button> 
         </div>
      </Card>
   </div>
}

function CourseCard ({course}) {
   return (
      <div style={{ zIndex: 2, display: "flex", justifyContent: "center", marginTop: 50, width: "100%" }}>
          <Card style={{ width: "90%", maxWidth: 325, borderRadius: 20 }}>
              <img src={course.imageLink} alt="course-img" style={{ width: "100%" }} />
              <div style={{ padding: 10 }}>
                  <Typography variant="h5">{course.title}</Typography>
                  <Typography variant="subtitle2" style={{ color: "grey" }}>Price</Typography>
                  <Typography variant="subtitle1"><b>Rs {course.price}</b></Typography>
              </div>
          </Card>
      </div>
  );
}

 

export default Update;