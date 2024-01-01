
import express from 'express'
import TransactionalData from '../controllers/TransactionalData.js'
import MpesaAuthentication from '../controllers/MpesaAuth/auth.controller.js'
import DynamicQrCodeController from '../controllers/DynamicQRCode/Dynamic.controller.js'
import PinValidation from '../controllers/Kra/validation.controller.js'
import Homepage from '../controllers/Home/home.controller.js'
import AppList from '../controllers/AppList/Apps.controller.js'
import CategoryList from '../controllers/CategoryList/category.controller.js'
import CurrencyConverter from '../controllers/CurrencyConverter/currency.controller.js'
import CurrenctListQuotes from '../controllers/CurrencyListQuotes/listqoutes.controller.js'
import ExchangeCurrency from '../controllers/ExchangeCurrency/Exchange.controller.js'
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
router.get('/', Homepage)
router.get('/apps', AppList)
router.get('/categories', CategoryList)
router.post('/currencies', CurrencyConverter)
router.post('/listquotes', CurrenctListQuotes)
router.post('/exchange-currency', ExchangeCurrency)



export default router

