import app from './app.js'
import dotenv from 'dotenv'



dotenv.config()

let port = process.env.PORT



app.listen(port , ()=>{
   console.log(`MPESA B2C Server running on PORT ${port}`)

   
  
})
