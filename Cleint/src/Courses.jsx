import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Button, Typography } from "@mui/material";


function Courses () {
    


    
 

    const [courses,setCourses] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses', {
            method : "GET",
            headers : {
                "authorization" : "Bearer " + localStorage.getItem('token')
            }
        }).then(res=> res.json()).then((data)=> {
            console.log(data.courses)
            setCourses(data.courses)
        
            
       

        })

    },[courses])
    return (
        <div style={{width : "100vw", height : "300vh", backgroundColor: "#eeeeee"}} >
      <Typography variant={"h6"}>Courses:</Typography>
      <div style={{display : "flex", flexWrap : "wrap", justifyContent : "center"}}>

       {courses.map((value)=> {
      return   <div key={value._id}> <Display  title = {value.title} description = {value.description} imageLink = {value.imageLink}  price = {value.price} _id = {value._id} ></Display></div> 

       })}
       </div>  
     </div>
    )
}


  function Display (props) {
    

 return   <Card style={{ width: "90%",minWidth: 240, maxWidth: 500, borderRadius: 20 }}>
 <img src={props.imageLink} alt="course-img" style={{ width: "100%" }} />
 <div style={{ padding: 10 }}>
     <Typography variant="h5">{props.title}</Typography>
     <Typography variant="subtitle2" style={{ color: "grey" }}>Price</Typography>
     <Typography variant="subtitle1"><b>Rs {props.price}</b></Typography>
 </div>
<Button 

onClick={()=> {
    window.location = (`/update/${props._id}`)
    
}}
variant={'contained'}>EDIT</Button>
  


</Card>
}






export default Courses;