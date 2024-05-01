import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Courseadd from "./Courseadd.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Open from "./Open.jsx";
import Courses from "./Courses.jsx";
import Adminpanel from "./Adminpanel.jsx";
import SignupC from "./SignupC.jsx";
import Bought from "./Bought.jsx";
import SigninC from "./SigninC.jsx";
import Buycourses from "./Buycourses.jsx";
import PublishedCourses from "./PublishedCourses.jsx";
import Homepage from "./Homepage.jsx";
import Firstsignin from "./Firstsignin.jsx";

import Update from './Update.jsx';
import './App.css';
function App() {
  return (
  
    <div style={{height : "100vh", width : "100vw",   backgroundColor : "#eeeeee"}}>
     
      <BrowserRouter>
   
   

      <Routes>
      <Route path="/firstsignin" element={<Firstsignin/>}>  </Route>
      <Route path="/open" element={<Open/>}>  </Route>
      <Route path="/home" element={<Homepage/>}>  </Route>
      <Route path="/clientsignup" element={<SignupC/>}>  </Route>
      <Route path="/clientsignin" element={<SigninC/>}>  </Route>
      <Route path="/boughtCourses" element={<Bought/>}>  </Route>
      <Route path="/publishedcourses" element={<PublishedCourses/>}>  </Route>
      <Route path="/buyCourse/:courseId" element={<Buycourses/>}>  </Route>
      <Route path="/adminpanel" element={< Adminpanel/>}>  </Route>
        <Route path="/signin" element={<Signin />}>  </Route>
        <Route path="/signup" element={<Signup/>}>  </Route>
        <Route path="/courseadd" element={<Courseadd />}>  </Route>
        <Route path="/courses" element={<Courses />}>  </Route>
        <Route path="/update/:courseId" element={<Update />}>  </Route>
    
    
       

  
      
      </Routes>
    </BrowserRouter> 
   
   
 

    </div>

  )
}






 
export default App;