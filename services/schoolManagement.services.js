const Students = require('../models/student.model')

exports.createStudentService = async (data) => {
    const product = await Students.create(data)
    return product
}