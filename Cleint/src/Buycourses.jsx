import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Grid, Typography, Card, Button } from "@mui/material";
import Commonbar from "./Commonbar";

function Buycourses() {
   let { courseId } = useParams();
   const [course, setCourse] = useState(null);

   useEffect(() => {
      axios.get(`http://localhost:3000/users/courses/${courseId}`, {
         headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
         }
      })
      .then(res => {
         setCourse(res.data.course);
      })
      .catch(error => {
         console.error("Error fetching course:", error);
      });
   }, [courseId]);

   const handleBuy = () => {
      axios.post(`http://localhost:3000/users/courses/${courseId}`, {}, {
         headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
         }
      })
      .then(response => {
         if (response.status === 200) {
            // If purchase is successful, you can update the course state to indicate it's purchased
            setCourse({ ...course, purchased: true });
            alert("Course purchased successfully");
         } else {
            // Handle other status codes (e.g., 403 or 404) if needed
            console.error("Error purchasing course:", response.data.message);
            // Handle error, e.g., show an error message to the user
            alert("Error purchasing course: " + response.data.message);
         }
      })
      .catch(error => {
         console.error("Error purchasing course:", error);
         // Handle error, e.g., show an error message to the user
         alert("Error purchasing course: " + error.message);
      });
   };

   if (!course) {
      return (
         <div style={{ height: "100vh", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            Loading....
         </div>
      );
   }

   return (
      <>
      <Commonbar/>
         <GreyTopper title={course.title} />
         <Grid container>
            <Grid item lg={4} md={12} sm={12}>
               <CourseCard course={course} handleBuy={handleBuy} />
            </Grid>
         </Grid>
      </>
   );
}

function GreyTopper({ title }) {
   return (
      <div style={{ height: 250, zIndex: 0, backgroundColor: "#212121", top: 0, width: "100vw", display: "flex", flexDirection: "column", marginBottom: -250 }}>
         <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div>
               <Typography variant={'h6'} style={{ textAlign: "center", color: "white", fontWeight: 600 }}>
                  {title}
               </Typography>
            </div>
         </div>
      </div>
   );
}

function CourseCard({ course, handleBuy }) {
   return (
      <div style={{ zIndex: 2, display: "flex", justifyContent: "center", marginTop: 50, width: "100%" }}>
         <Card style={{ width: "90%", maxWidth: 325, borderRadius: 20 }}>
            <img src={course.imageLink} alt="course-img" style={{ width: "100%" }} />
            <div style={{ padding: 10 }}>
               <Typography variant="h5">{course.title}</Typography>
               <Typography variant="subtitle2" style={{ color: "grey" }}>Price</Typography>
               <Typography variant="subtitle1"><b>Rs {course.price}</b></Typography>
               <Button onClick={handleBuy}>Buy</Button>
            </div>
         </Card>
      </div>
   );
}

export default Buycourses;
