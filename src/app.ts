import express, { Application, Request, Response } from 'express';
import { MongoClient } from "mongodb";

const app: Application = express();
const PORT = process.env.PORT || 3000;
const mongodb = require('../db/connection');

mongodb.initDb((err: Error | null, db: MongoClient ) => {
    if (err) {
        console.log(err);
    }else{
        app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
});
    }});

app
.use(express.json())
.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})
app.use('/', require('../routes/index.js'));

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});