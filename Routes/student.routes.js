const express = require("express");
const router=express.Router()

const studentController=require('../controller/student.controller')

router.route('/student')
.get(studentController.getStudents)
.post(studentController.createStudents)
router.route('/student/:id')
.patch(studentController.updateStudent)
.delete(studentController.deleteStudent)

module.exports=router;