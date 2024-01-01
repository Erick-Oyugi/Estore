import Joi from 'joi'

const ValidationJoiSchema = Joi.object({
    MerchantName : Joi.string().required(),
    RefNo: Joi.string().required(),
    Amount: Joi.number().required(),
    TrxCode: Joi.string().required(),
    CPI : Joi.string().required(),
    Size: Joi.string().required()

})

export default ValidationJoiSchema