import express from "express";
const app = express();
import path from 'path';
import bodyParser from 'body-parser'
import { setData } from "./utils/dataManager.js";
import {exec} from 'child_process'
import { delay } from "./utils/config.js";
import config from './utils/config.js'

const __dirname = path.resolve(path.dirname(""));

// parse application/json
app.use(bodyParser.json())

app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/', (_req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/check_auth', async (req, res)=>{
    const {username, password} = req.body;
    setData({Item:[{username, password}]})
    exec(`openrpa -workflowid ${config.checkAuthFlowID}`, { 'shell': 'powershell.exe' })
    // console.log(error)
    // if(error!=null){
    //     throw new Error(error)
    // }
    // await delay(10000);
    res.send({
        status: 200,
        message: 'saved'
    })
})

app.listen(3000, '0.0.0.0')