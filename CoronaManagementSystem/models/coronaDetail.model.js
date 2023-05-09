const mongoose = require("mongoose");
const { count } = require("./user.model");

const coronaDetailSchema = mongoose.Schema({
     userCode:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'users'
     },
     dateVaccination:[Date],
     manufacturerVaccine: [String],
     positiveResultDate:Date,
     recoveryDate :Date,

});
const coronaDetail = new mongoose.model("coronaDetails", coronaDetailSchema);
module.exports = coronaDetail;
