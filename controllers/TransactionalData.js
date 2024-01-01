import unirest from 'unirest'
import dotenv from 'dotenv'
import { response } from 'express';
import axios from 'axios'

import MpesaB2CTransaction from './MpesaB2C.js'





dotenv.config()

const TransactionalData = async (req, res)=> {

    const mpesaB2c = new MpesaB2CTransaction ();

    // setTimeout(() => {
    //     console.log (`--------------------Generating Authorization Token-------------------------`)
    //   }, "1000");

    // const fullString = process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET;
    // let base64 = Buffer.from(fullString).toString("base64");

    // console.log(base64)

    // let request = unirest('GET', `${process.env.AUTH_URL_ENDPOINT}`)
    // .headers({'Authorization' : `Basic ${base64}`})
    // .send()
    // .end(function (response) {

    //         if (response.error) throw new Error(response.error);
    //         console.log(response.raw_body); //  
    //         res.status(200).send(response.raw_body)
    //         const bearerToken = response.raw_body;
            
    //         console.log(raw_body.access_token);
    //     });


    // return bearerToken


// axios({
//     url : process.env.AUTH_URL_ENDPOINT,
//     method: 'GET',
//     headers:{
//         'Content-type': 'application/json',
//         'Authorization': `Basic ${base64}`
//     }
//    })
//    .then(response => {
//     res.status(200).json(response.data);
//     bearerToken = response.data
//     console.log(bearerToken)
//     console.log(bearerToken.access_token)
   
//    })
   
//    .catch((err) => {
//     res.status(500).json({ message: err });
//    });


//   return bearerToken


mpesaB2c.bearerToken






}


export default TransactionalData


