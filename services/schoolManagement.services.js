const Students = require('../models/student.model')

exports.createStudentService = async (data) => {
    const product = await Students.create(data)
    return product
}
exports.getStudentService = async () => {
    const result = await Students.find({})
    return result;
}
