import unirest from "unirest"
import axios from "axios"
import dotenv from 'dotenv'

dotenv.config()

const MpesaAuthentication = async(req,res) => {

         
    const fullString = process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET;
    let base64 = Buffer.from(fullString).toString("base64");

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




}


export default MpesaAuthentication