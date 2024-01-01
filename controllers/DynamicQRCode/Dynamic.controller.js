
import ValidationJoiSchema from "../../models/DynamicCodeSchema/qr.joi.js"
import dotenv from 'dotenv'
import axios from "axios"
import express from "express"
import bodyParser from "body-parser"



const app = express()

app.use(bodyParser.json())
dotenv.config()


const DynamicQrCodeController =  async(req, res) => {



try {

    const fullString = process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET;
    let base64 = Buffer.from(fullString).toString("base64");
    

 const value = await  ValidationJoiSchema.validateAsync({
           MerchantName : req.body.MerchantName,
           RefNo : req.body.RefNo,
           Amount: req.body.Amount,
           TrxCode: req.body.TrxCode,
           CPI : req.body.CPI,
           Size: req.body.Size


 })

console.log(value)

axios({
    url : process.env.AUTH_URL_ENDPOINT,
    method: 'GET',
    headers:{
        'Content-type': 'application/json',
        'Authorization': `Basic ${base64}`
    }
})
.then(response => {
    res.status(200).json(response.data);

    setTimeout(() => {
        console.log (`--------------------Generating Authorization Token-------------------------`)
      }, "1000");

      setTimeout(() => {
        console.log (response.data)
      }, "2000");
    bearerToken = response.data
    console.log(bearerToken.access_token)
   
   })

.catch((err) => {
    res.status(400);
   });

axios.post(process.env.QR_CODE_URL, value, {

    headers:{
        'Content-type': 'application/json',
        'Authorization': `Basic ${bearerToken}`
    }
})
.then(response => {
    res.status(200).json(response.data);

})

.catch((err) => {
    res.status(400);
   });



}

catch (err) {
    console.log(err)
 }




}

export default DynamicQrCodeController