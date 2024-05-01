import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Course'}]
})

const adminSchema = new mongoose.Schema({
    username : String,  
    password : String
})
const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : String,
    imageLink : String,
    published : Boolean
})

const USER = mongoose.model('User', userSchema)
const ADMIN = mongoose.model('Admin',adminSchema)
const COURSES = mongoose.model('Course',courseSchema)





const model = {
    USER,
    ADMIN,
    COURSES
}

export default model;