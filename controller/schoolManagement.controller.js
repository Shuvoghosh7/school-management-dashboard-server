const { createStudentService } = require("../services/schoolManagement.services")


exports.createStudents=async (req, res, next) => {
    try {
        const result=await createStudentService(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "Data inside successfully",
        data: result
      })
    } catch (error) {
        res.status(400).json({
            stauts:"fail",
            message: "Data is not inserted",
            error : error.message
          })
    }
}