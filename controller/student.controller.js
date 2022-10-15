const { createStudentService, getStudentService, updateStudentService, deleteStudentService } = require("../services/student.services")



exports.createStudents = async (req, res, next) => {
  try {
    const result = await createStudentService(req.body)
    res.status(200).json({
      stauts: "success",
      massage: "Data inside successfully",
      data: result
    })
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not inserted",
      error: error.message
    })
  }
}
exports.getStudents = async (req, res, next) => {
  try {
    const students = await getStudentService();
    res.send(students)
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not found",
      error: error.message
    })
  }
}

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateStudentService(id, req.body)
    res.send(result)

  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Student Data is not update",
      error: error.message
    })
  }
}

exports.deleteStudent=async(req,res,next)=>{
  try {
    const {id}=req.params;
    const result=await deleteStudentService(id)
    if(!result.deletedCount){
      return res.status({
        stauts: "fail",
        error: "Could not delete the Record",
      })
    }
    res.send(result)
    
  } catch (error) {
    res.status(400).json({
      stauts:"fail",
      message: "Student data is not update",
      error : error.message
    })
  }

}