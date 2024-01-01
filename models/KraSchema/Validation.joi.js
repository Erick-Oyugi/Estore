import Joi from 'joi'

const ValidationJoiSchema = Joi.object({ 
    loginId: Joi.string().required(),
    password: Joi.string().required(),
    typeOfTaxPayer: Joi.string().required(),
    taxpayerID: Joi.string().required(),
    


})

export default ValidationJoiSchema