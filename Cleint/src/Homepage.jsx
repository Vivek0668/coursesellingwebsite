import { Button, Hidden, Typography } from "@mui/material";
import Homeappbar from "./Homeappbar";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Homepage.css';
import Dropdown from "./Dropdown";
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function Homepage() {
    const nav = useNavigate()
    return (
        
        
        <div style={{   position: "relative", overflow: "auto", width: '100vw', backgroundColor: 'rgba(17,33,33,255)' }}>
    <Homeappbar/>
           
            <div style={{marginTop :80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', minHeight: '100vh' }}>
                
              
                <div style={{ textAlign: 'center', maxWidth: 600,  }}>
                  <div  style={{color : "#ace35f", fontWeight : 900}}>  <Typography  variant={"h3"} style={{ fontFamily: 'Arial',  marginBottom: 4 }}>Premium MERN Stack Courses,Learn DSA , </Typography></div>
<Typography style={{color : "#ace35f",  marginBottom: 20}} variant={'h4'}>Blockchain,AI Courses, at very budget-friendly prices</Typography>
                    <Typography variant={'h6'} style={{ fontFamily: 'Arial', color: '#fff', marginBottom: 20 }}>The most affordable, premium courses available with projects, guides, and certificates included</Typography>
<div style={ {}}>
<Button
onClick={()=> {
    nav('/firstsignin')
}}
 id="button"  style={ { marginRight : 7, borderRadius :30 , backgroundColor : '#09756a', opacity : 2, border : "1px solid black"}} variant="contained">All courses<div style={{paddingLeft : 8, paddingTop : 6, textAlign : "right", lineHeight : 2}}><LocalLibraryIcon/></div></Button>
<Button   style={ { borderRadius :30 , backgroundColor : '#09756a', opacity : 2, border : "1px solid black"}} variant="contained">Mentorship Groups<div style={{paddingLeft: 8, paddingTop : 6,textAlign : "right", lineHeight: 2}}><SchoolIcon/></div></Button>
<Button   style={ {marginLeft : 7, borderRadius :30 , backgroundColor : '#09756a', opacity : 2, border : "1px solid black"}} variant="contained">Testmonials <div style={{paddingLeft : 8, paddingTop : 6, textAlign : 'right', lineHeight : 2}}><StarIcon fontSize="small"/></div></Button>
</div>
                    <div style={{marginTop : 50,height : 7, boxShadow : "0px 5px 10px 0px #507b2d"}}>_________________________________________________________________________</div><br/><br/><br/><br/>
                    <div style={{ display: 'flex', marginTop: 40 }}>



                        <div style={{ flex: 1, position: 'absolute', left: 110 }}>
                            <Typography style={{ position : 'relative',  color: "White", fontWeight : "bolder"}}  variant= {'h4'}>Is this program for you ?</Typography>
                            <br/>
                           

                           
                            <Typography style = {{overflow : 'hidden', whiteSpace : "nowrap",  position : 'absolute',   textAlign : "left", color : 'white'}} variant={'h6'}>Whether you're a beginner or professional seeking to<br/> upskill, transition, or broaden your horizons in the field,<br/> our program is designed to help you succeed.</Typography>
                          
                            <br/>
                            <br/>
                            <div style={{position : "absolute",marginTop : 85, display: 'flex',  gap :20}}>
                                <Button onClick={()=> {
                                    nav('/firstsignin')

                                }} 
   
   id="button1" style={{  fontFamily : "unset" ,width : 200,height : 45,backgroundColor : "rgba(11,101,90,255)"}} variant="contained">Buy courses</Button>
                                <Button style={{boxShadow : "0px 5px 10px 0px #507b2d"  ,backgroundColor : "rgba(12,10,9,255)",  fontFamily : "unset" ,width : 220,height : 42,}} variant="contained">Join Mentorship</Button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginLeft: 50, position: 'absolute', right: 40 }}>
                            <span id="span1" style={{ textAlign : "left", width: 800, height: 50, borderRadius: 9, backgroundColor: "#0b3d38", verticalAlign : "middle", lineHeight : 3 }}><div style={ {color: "#08776a", marginLeft : 10}}><CheckCircleOutlineOutlinedIcon fontSize="small"/><span style={{ paddingLeft : 15,  color: "white"}}>Front-End Engineers</span></div></span>
                            <span id="span1" style={{ textAlign : "left", width: 800, height: 50, borderRadius: 9, backgroundColor: "#0b3d38", verticalAlign : "middle", lineHeight : 3 }}><div style={ {color: "#08776a", marginLeft : 10}}><CheckCircleOutlineOutlinedIcon fontSize="small"/><span style={{ paddingLeft : 15,  color: "white"}}>Back-End Engineers</span></div></span>
                            <span id="span1" style={{ textAlign : "left", width: 800, height: 50, borderRadius: 9, backgroundColor: "#0b3d38", verticalAlign : "middle", lineHeight : 3 }}><div style={ {color: "#08776a", marginLeft : 10}}><CheckCircleOutlineOutlinedIcon fontSize="small"/><span style={{ paddingLeft : 15,  color: "white"}}>Junior Software Developers</span></div></span>
                            <span id="span1" style={{ textAlign : "left", width: 800, height: 50, borderRadius: 9, backgroundColor: "#0b3d38", verticalAlign : "middle", lineHeight : 3 }}><div style={ {color: "#08776a", marginLeft : 10}}><CheckCircleOutlineOutlinedIcon fontSize="small"/><span style={{ paddingLeft : 15,  color: "white"}}>Recent computer science graduates</span></div></span>
                            <span id="span1" style={{ textAlign : "left", width: 800, height: 50, borderRadius: 9, backgroundColor: "#0b3d38", verticalAlign : "middle", lineHeight : 3 }}><div style={ {color: "#08776a", marginLeft : 10}}><CheckCircleOutlineOutlinedIcon fontSize="small"/><span style={{ paddingLeft : 15,  color: "white"}}>Engineers and leaders who want to revisit the concepts</span></div></span>
                           
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 40 }}>
                <div>
               
                </div>
                
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop : 160, paddingTop : 90 }}>
                    <div style={{marginTop : 50,height : 7, boxShadow : "0px 5px 10px 0px #507b2d"}}>____________________________________________________________________________________________________</div>
                    <br/>
                    <Typography  variant="h4" style={{paddingLeft : 340, fontFamily: 'Arial', color: '#fff' }}>FAQ</Typography>
                   <div style={ {marginBottom : 15}}> <Dropdown  placeholderText="What is the validity of the course" dropdownText="The validity of the Course typically depends on the specific nature of the Course itself. Most Courses come with a predetermined duration or validity period, which can range from a few weeks to several years, or certainly for lifetime. It's important for participants to carefully review the terms and conditions outlined by the provider to understand the duration for which the Course materials, access to resources, and any certifications or credentials awarded upon completion remain valid." /></div>
                       <br/>
                       <br/>
                       <br/>

                       <div style={ {marginBottom : 15}}> <Dropdown  placeholderText="What is the refund policy" dropdownText="Our refund policy is designed to provide peace of mind to our participants. We offer a hassle-free refund process, ensuring complete satisfaction with your experience. If for any reason you're not satisfied with the Course, you can request a refund without encountering any problems. We value your trust and aim to make the refund process as straightforward as possible, prioritizing customer satisfaction above all else." /></div>
                       <br/>
                       <br/>
                       <br/>
                       <div style={ {marginBottom : 15}}> <Dropdown  placeholderText="How do i contact You" dropdownText="Please email us at admin@gmail.com. You all can directly DM us on our social media links provided below." /></div>
                       <br/>
                       <br/>
                       <br/>

                       <div style={{marginTop : 50,height : 7, boxShadow : "0px 5px 10px 0px #507b2d"}}>____________________________________________________________________________________________________</div>
                    <br/>
               
                    
                    
                    </div>
                </div>

                <div id="End" style={{ display : 'flex', alignContent : "space-around",justifyContent: "space-around",  backgroundColor : "#031211", width : '100vw', height : 300, color : "white"}}>
                    <div id="para1">
                        <div  style={{ paddingTop : 15,color :"#9b9596", fontWeight : "bolder", fontSize : "22px"}}>Voursera</div>
                        <p id="des">Transforming the way individuals learn and<br/> network for professional excellence!</p>
                        <p style={{display : "flex", gap : 20}}>
                           <p> <FacebookIcon/></p>
                         
                           <p><InstagramIcon/></p> 
                         <p><XIcon/></p>   

                        </p>
                    </div>
                    <div id="para2">
                        <p  style={{color :"#9b9596",fontWeight : "bolder", fontSize : "22px"}}>LIVE COURSES</p>
                        <p>MERN FullStack Course</p>
                        <p>Master DSA Course</p>
                        <p>Next JS FullStack</p>
                        <p>All Courses Package</p>
                    </div>
                    <div id="para3">
                        <p  style={{color :"#9b9596",fontWeight : "bolder", fontSize : "22px"}}>RESOURCES</p>
                        <p>DSA Sheets</p>
                        <p>Resume Builder</p>
                        <p>Premium Guides</p>
                    </div>
                    <div id="para4">
                        <p  style={{color :"#9b9596",fontWeight : "bolder", fontSize : "22px"}}>ABOUT US</p>
                        <p>Privacy Policy</p>
                        <p>Term & Conditions</p>
                        <p>Support</p>
                    </div>
                </div>

                <div id="endbar" style={ { display: 'flex', justifyContent : "center", alignItems : "center", backgroundColor : "#09090b",  width : '100vw',height : 40}}>
                    <p style={ {color : "white"}}>© 2024 Voursera Inc.</p>
                </div>
            </div>
            
           
        </div>
    );
}

export default Homepage;
