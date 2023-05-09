const CoronaDetailsController=require("../controllers/coronaDetail");
const routerCoronaDetail=require("express").Router();
routerCoronaDetail.get("",CoronaDetailsController.getAllDetails);
routerCoronaDetail.post("",CoronaDetailsController.addDetails);
routerCoronaDetail.delete("/:id",CoronaDetailsController.deleteDetails);
routerCoronaDetail.post("/:id",CoronaDetailsController.AddVaccination);
routerCoronaDetail.post("/:id/:positiveResult",CoronaDetailsController.AddResult);

module.exports=routerCoronaDetail;