const mongoose=require("mongoose");
const CoronaDetails=require("../models/coronaDetail.model");

const getAllDetails=async (req,res)=>{
    try{
         let Details=await CoronaDetails.find({});
         res.send(Details)
    }
    catch(e){
        res.status(400).send(e.message)}
}

const addDetails=async(req,res)=>{
    try{     
let d= new CoronaDetails({...req.body})
let us=await d.save();
return res.send(us);
    }
    catch(e) {
        res.status(400).send(e.message)
    }
}
const deleteDetails=async(req,res)=>{
    try{
        let{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).send("קוד לא תקין")
        let d =await CoronaDetails.findByIdAndDelete(id);
        return res.send(d);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const AddVaccination=async(req,res)=>{
    try{ 
        let id=req.params.id
        let Detail=req.body;
        if(!mongoose.Types.ObjectId.isValid(id))
          return res.status(400).send("קוד משתמש לא תקין")
          let d=await CoronaDetails.findOne({userCode:id})
        if(!d)
          return res.status(404).send("לא נמצאו פרטים למשתמש זה");
        if(d.dateVaccination.length==4)
          return res.status(400).send("כל החיסונים בוצעו")
        d.dateVaccination.push(Detail.dateVaccination);
        d.manufacturerVaccine.push(Detail.manufacturerVaccine)
        await d.save();
        return res.send(d);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const AddResult=async(req,res)=>{
    try{
        let id=req.params.id;
        let positiveResult=new Date(req.params.positiveResult)
        const year = positiveResult.getFullYear()
         const month = String(positiveResult.getMonth() + 1).padStart(2, '0')
        const day = String(positiveResult.getDate()).padStart(2, '0')
        const day2 = String(positiveResult.getDate()+7).padStart(2, '0')

         let date1= `${year}-${month}-${day}`
         let date2= `${year}-${month}-${day2}`
        if(!mongoose.Types.ObjectId.isValid(id))
          return res.status(400).send("קוד משתמש לא תקין")
        let d=await CoronaDetails.findOne({userCode:id})    
        if(!d)
          return res.status(404).send("לא נמצאו פרטים למשתמש זה");
        d.positiveResultDate=date1
         d.recoveryDate= date2
        
        await d.save();
        return res.send(d);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
module.exports={
    deleteDetails,
    addDetails,
    getAllDetails,
    AddVaccination,
    AddResult
}
