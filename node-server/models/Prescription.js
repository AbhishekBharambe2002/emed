const mongoose  =   require("mongoose");

const PrescriptionSchema =  new mongoose.Schema(
    {
    Medname:String,
    Mednumber: Number,
    image:String
},
{
    collection:"PrescriptionDetails",
}
);
const PrescriptionModel = mongoose.model("PrescriptionDetails", PrescriptionSchema);
module.exports = PrescriptionModel;