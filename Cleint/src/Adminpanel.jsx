
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
function Adminpanel () {
    const navigate = useNavigate();
   

    return (

       
        <div>

       

        

        
        <div>
       
        <div style={{display : "flex", flexDirection :"column", marginTop : 100, marginLeft : 75, position : "relative"}}>

       
         <Typography 
         style = {{paddingBottom : 17}}
         
         variant={"h4"}>Voursera Admin</Typography>
         <div style={{display : "flex"}}>

        
  <Card 
  style={{ width: "50%", maxWidth : 400, height : 200, borderRadius: 20, display : "flex", flexDirection : "column", justifyContent: "center", alignItems : "center", justifyItems : "center" , position : "relative"}}>
         <Typography 
            style = {{paddingBottom : 10, position : "absolute", top : 0}}
         
          variant={'h5'}> Admin-Panel</Typography>
         <div style={{display : "flex", gap : 13}}>
         <div style={ {display : "flex", flexDirection : "column"}}>

         

         <Typography style={ {paddingBottom : "20px"}} variant={'h6'} >A place to learn earn and grow</Typography>
<div style = {{display : "flex", gap : "20px"}}>


         <Button 
         onClick={()=> {
            navigate('/signup')


         }}
         style={{width : "100px"}}variant={"contained"}>SignUp</Button>
         <Button
         onClick={ ()=> {
            navigate('/signin')
         }}
         style={{width : "100px"}} variant={"contained"}>SignIn</Button>   
</div>
         </div>
                  </div>
                  
                  </Card>
<div style={{paddingLeft : 100 , position : "absolute", top : -50, right : 20}}>
                  <img src={'https://img.freepik.com/free-vector/businesswoman-work_24908-59908.jpg?t=st=1712778449~exp=1712782049~hmac=bd6cc58016909b3129c130c4eaf9206be04a2bca50a74bf5cae4f63a11008f9e&w=826'} alt="course-img" style={{ width: 500, }} />
                  </div>
                  </div>
         </div>
        </div>
        </div>
    )
}

export default Adminpanel;