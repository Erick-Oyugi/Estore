import axios from 'axios'
import dotenv from 'dotenv'

import xml2js from 'xml2js'
import ValidationJoiSchema from '../../models/KraSchema/Validation.joi.js';

dotenv.config();


const PinValidation = async (req, res)=> {
 //Joi Validation

   try{

    const builder = new xml2js.Builder({

      headless: true,
      // renderOpts: { 'pretty': false, 'indent': ' ', 'newline': '\n' },
            xmldec: {
                version: '1.0',
                encoding: 'UTF-8',
                standalone: null
              }
     } );


  const value = await  ValidationJoiSchema.validateAsync({
        loginId : req.body.loginId,
        password : req.body.password,
        typeOfTaxPayer: req.body.typeOfTaxPayer,
        taxpayerID: req.body.taxpayerID

     })

     // Define the structure of the SOAP request with dynamic JSON data
const soapRequest = {
   'soapenv:Envelope': {
     $: { xmlns: 'http://schemas.xmlsoap.org/soap/envelope/',
     'xmlns:impl': 'http://impl.facade.ussd.kra.tcs.com/' },
     'soapenv:Header': {},
     'soapenv:Body': {
       'impl:validateTaxpayerID': value
     }
   }
 };

    const ValidationXmlData = builder.buildObject(soapRequest);


    axios.post(process.env.KRA_URL, ValidationXmlData , {
        haeder: {
            'Content-type': 'application/xml',
        }
    })

    .then(response => {
        res.status(200).json(response.data);

    })

    .catch((err) => {
        res.status(400);
     });



     res.status(200).json(ValidationXmlData)

    }


    catch(err){

        res.status(500).json(err)

     }
  
    
}

export default PinValidation