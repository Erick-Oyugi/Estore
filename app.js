import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet'
import routes from './routes/routes.js'



const app = express();
// For parsing application/json
app.use(express.json());
app.use(helmet());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)
app.set('view engine', 'hbs')



app.post('/profile', function (req, res) {
    name : req.body.name
    res.send();
});




export default app