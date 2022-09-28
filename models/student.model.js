const { ObjectID } = require("bson");
const mongoose = require("mongoose");

//schema design
const studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for thid product"],
      trim: true,
      lowercase:true,
      unique: [true, "Name must be Unique"],
      minLength: [3, "Name mast be 3 characters"],
      maxLength: [100, "Name is too larges"],
    },
    /* description: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "liter", "pcs","bag"],
        massage: "Unit value can't be {VALUE},must be kg/liter/pcs",
      }
    },
    imageUrl:[{
      type:String,
      required: true,
      validate:{
        validator:(value)=>{
          if(!Array.isArray(value)){
            return false;
          }
          let isValid=true;
          value.forEach(url =>{
            if(!validator.isURL(url)){
              isValid.false;
            }
          });
          return isValid;
        },
        massage: "Plese provide valid image url"
      }
    }],
    category:{
      type:String,
      require:true,
    } */
    
  }, {
    timestamps: true
  })

  //model
  const Students = mongoose.model('Students', studentSchema)

  module.exports=Students;