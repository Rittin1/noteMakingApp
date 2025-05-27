import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import router from './router';
dotenv.config();
const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

const connectionString = process.env.MONGO_URL.toString();
mongoose.Promise = Promise;
mongoose.connect(connectionString);
mongoose.connection.on('error',(error: Error)=>console.log(error));

const port = process.env.port;
//console.log(port);
server.listen(port, ()=>{
    const text = "server running on http://localhost:" + port + "/";
    console.log(text);
});

app.use('/',router());
