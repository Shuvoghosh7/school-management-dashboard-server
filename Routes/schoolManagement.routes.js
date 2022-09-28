const express = require("express");
const router=express.Router()

const schoolManagementController=require('../controller/schoolManagement.controller')

router.route('/student')
/* .get(schoolManagementController.getController) */
.post(schoolManagementController.createStudents)

module.exports=router;