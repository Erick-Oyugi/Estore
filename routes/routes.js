
import express from 'express'
import TransactionalData from '../controllers/TransactionalData.js'
import MpesaAuthentication from '../controllers/MpesaAuth/auth.controller.js'
import DynamicQrCodeController from '../controllers/DynamicQRCode/Dynamic.controller.js'
import PinValidation from '../controllers/Kra/validation.controller.js'
const router = express.Router()



router.post('/mpesab2c', TransactionalData)
router.post('/mpesab2b')
router.post('/mpesac2b')
router.post('/auth/Mpesa', MpesaAuthentication)
router.post('/mpesaQrCode', DynamicQrCodeController)
router.post('/mpesa-account-balance')
router.post('/pesalink-verification')
router.post('/pesalink-to-bank')
router.post('/pesalink-to-phone')
router.post('/forex')
router.post('/iprs')
router.post('/crb')
router.post('/pinvalidation', PinValidation)



export default router

