
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';


function Courseadd () {

    const [title,setTitle] = useState() 
    const [des,setdes] = useState() 
    const [image,setImage] = useState("")
    const [price,setPrice] = useState(0)

   
    

    return (
        <div>
        
        <center>
           
       <div style={{backgroundImage : 'url(https://img.freepik.com/free-vector/school-elements-chalkboard-style_23-2147760693.jpg?w=740)',
        width : "100%", height : "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center'
       }}>
        <div style={{ padding: "20px", width: "100%", maxWidth: "450px" }}>
          
           <Box sx={{ boxShadow: 10, backgroundColor: '#ffff', borderRadius: "20px", padding: "20px" }}>
               <Card style={ {}}>
               <Typography  style= {{paddingBottom : "12px"}} variant={'h5'}> Add Courses below</Typography>
               <TextField
                 onChange={(e)=> {
                setTitle(e.target.value)

              }}


              
               style={{marginTop : "30px",margin: "7px", width : "420px"}} 
                 autoComplete="title"
                 name="title"
                 required
            
                 id="title"
                 label="Add title"
                 autoFocus
               />
            
              
              
            
               <TextField
                 onChange={(e)=> {
                setdes(e.target.value)

              }}
            
               
               style={ {margin: "7px",width : "420px"}}
                 required
               
                 name=" description"
                 label=" Add description"
                 type="text"
                 id="description"
                 autoComplete="new - description"
               />


              <TextField
                 onChange={(e)=> {
                setImage(e.target.value)

              }}
               style={ {margin: "7px",width : "420px"}}
                 required
                 name=" Image"
                 label=" Add Image-Link"
                 type="text"
                 id="Image"
                 autoComplete="new - description"
               />
                <TextField
                 onChange={(e)=> {
                setPrice(e.target.value)

              }}


              
               style={{marginTop : "30px",margin: "7px", width : "420px"}} 
                 autoComplete="Price"
                 name="price"
                 required
                
            
                 id="price"
                 label="Set Price"
                 autoFocus
               />
            

              <Button

              onClick={()=> {
                alert('Course added')
                fetch('http://localhost:3000/admin/courses', {
                  
                    method : "POST",
                    body : JSON.stringify({
                        title  : title,
                        description : des,
                        imageLink : image,
                        price : price
                        

                    }), 
                    headers : {
                        "Content-type" : "application/json",
                        "authorization" : "Bearer " + localStorage.getItem('token')
                    }
                    
                    
                })
              }}
              

             type="submit"
             
             variant="contained"
             sx={{ mt: 3, mb: 2, width: "420px" }}
           >
             Add Course
           </Button>
           

       
               




               </Card></Box>
               
               </div>
               </div>
           </center>

        </div>
      
        
    )
}

export default Courseadd;