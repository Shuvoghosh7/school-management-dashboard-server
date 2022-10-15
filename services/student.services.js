const Students = require('../models/student.model')

exports.createStudentService = async (data) => {
    const result = await Students.create(data)
    return result
}
exports.getStudentService = async () => {
    const result = await Students.find({})
    return result;
}
exports.updateStudentService = async (id,data) => {
    const result = await Students.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}

exports.deleteStudentService = async (id) => {
    const result = await Students.deleteOne({_id:id})
    return result;
}


