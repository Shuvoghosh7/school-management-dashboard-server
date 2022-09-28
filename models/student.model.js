const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const validator = require('validator');
//schema design
const studentSchema = mongoose.Schema({
    imageURL:{
        type:String,
        validator:[validator.isURL,"Plese provide a valid url"]
    },
    name: {
      type: String,
      required: [true, "Please provide a name for thid product"],
      trim: true,
      lowercase:true,
      minLength: [3, "Name mast be 3 characters"],
      maxLength: [100, "Name is too larges"],
    },

    rollNo:{
         type:Number,
         required:true,
         unique:true,
         minLength: [6, "Name mast be 3 characters"],
    },
    admitionDate:{
        type:String,
        required:true,
    },
    parentName:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    class:{
        type:Number,
        required:true,
        minLength: [0, "class can not Nagative"],
        maxLength: [10, "class is not more then 10"],
    },
    grade: {
        type: String,
        require: true,
        enum: {
            values: ['A', 'B', 'C','D','F'],
            massage: 'status can not be {VALUE}'
        }
    },
  }, {
    timestamps: true
  })

  //model
  const Students = mongoose.model('Students', studentSchema)

  module.exports=Students;