import express, { json } from 'express';
import { UserRouter } from './user/user.routes';
import { connect } from './config/db'
import dotenv from "dotenv";
var cors = require('cors')


dotenv.config();


const app = express();
app.use(cors({
    origin: ['http://localhost:3000', '*'],
}));
const port = process.env.PORT;
app.use(json())
app.use('/api/user', new UserRouter().router)
app.listen(port)
connect().catch(error => console.log(error));
console.log(`server is listening on ${port}`);
