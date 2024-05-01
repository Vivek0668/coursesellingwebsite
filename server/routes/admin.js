import express from 'express';


import model from '../db/index.js'
const { ADMIN, COURSES } = model;

import auth  from '../middleware/auth.js';
const {secretKey, authenticateJwt} = auth

import jwt from 'jsonwebtoken';








const router = express.Router();

router.post('/signup',async(req,res)=> {
  
    const {firstname,lastname,email,username,password} = req.body
    
      let existing =  await ADMIN.findOne({username})
      if(existing) {
          res.status(400).json({message: "Admin already exists"})
      }else {
          let newAdmin = new ADMIN({firstname,lastname,email,username,password})
          await newAdmin.save();
          let token = jwt.sign({username, role : "user"},secretKey)
          res.status(200).json({ message : "new Admin created",token: token})
  
  
      }
   
  
  })
  
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await ADMIN.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new COURSES(req.body);
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course.id });
  });

  router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await COURSES.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
  router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await COURSES.find({});
    res.json({ courses });
  });
  router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await COURSES.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json({ course });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/me', authenticateJwt,(req,res)=> {
    res.status(200).json({
      username : req.user.username
    })
 

  })

export default router;

  

  
