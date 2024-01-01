import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()


const MpesaB2CTransaction = async (req, res, bearerToken)=> {

    setTimeout(() => {
        console.log (`--------------------Generating Authorization Token-------------------------`)
      }, "1000");


      
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
        bearerToken = response.data
        console.log(bearerToken)
        console.log(bearerToken.access_token)
       
       })

    .catch((err) => {
        res.status(500).json({ message: err });
       });
    
}

export default MpesaB2CTransaction

