import express from "express";
const app = express();
import path from 'path';
import bodyParser from 'body-parser'
import { getData, setData,setDataJSON } from "./utils/dataManager.js";
import {exec} from 'child_process'
import config, { delay } from "./utils/config.js";

const __dirname = path.resolve(path.dirname(""));

// parse application/json
app.use(bodyParser.json())

app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/', (_req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/check_auth', async (req, res)=>{
    const {username, password} = req.body;
    setDataJSON([{username, password}]);
    setData('in process', "/data/auth_result.txt");
    const {error} = exec(`openrpa -workflowid ${config.checkAuthFlowID}`, { 'shell': 'powershell.exe' })
    if(error!=null){
        throw new Error(error)
    }
    const myInterval = setInterval(() => {
        const authResult = getData("/data/auth_result.txt");
        if(authResult!=='in process'){
            const isLoginSuccess = authResult == '1';
            res.send({
                status: 200,
                message: `login success:${isLoginSuccess}`,
                data:{
                    isLoginSuccess
                }
            })
            clearInterval(myInterval);
        }
    }, 1000);
    
});

app.post('/start_procedures', async(req, res)=>{
    setData('in process', "/data/main_procedure.txt");
    const {error} = exec(`openrpa -workflowid ${config.mainProcedureFlowID}`, { 'shell': 'powershell.exe' })
    if(error!=null){
        throw new Error(error)
    }
    const myInterval = setInterval(() => {
        const authResult = getData("/data/main_procedure.txt");
        if(authResult!=='in process'){
            const isProcessSuccess = authResult == '1';
            res.send({
                status: 200,
                message: `ran success:${isLoginSuccess}`,
                data:{
                    isProcessSuccess
                }
            })
            clearInterval(myInterval);
        }
    }, 1000);
})

app.listen(3000, '0.0.0.0')