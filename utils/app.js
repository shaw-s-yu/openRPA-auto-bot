import config from './config.js'
import { sendPost } from './request.js';

const usernameTextBox = document.getElementById('usernameTextBox');
const passwordTextBox = document.getElementById('passwordTextBox');
const submitButton = document.getElementById('submitButton');
const loginResultLabel = document.getElementById('loginResultLabel');
const submitButtonSpinner = document.getElementById('submitButtonSpinner');
const submitButtonSpan = document.getElementById('submitButtonSpan');
const showHideScreenShareButton = document.getElementById('showHideScreenShareButton');
const showHideScreenShareSpan = document.getElementById('showHideScreenShareSpan')
const screenShareContainer = document.getElementById('screenShareContainer');
const startMainProcedureButton = document.getElementById('startMainProcedureButton');
const startMainProcedureButtonSpinner = document.getElementById('startMainProcedureButtonSpinner');
const startMainProcedureButtonSpan = document.getElementById('startMainProcedureButtonSpan');
const startMainProcedureResultSpan = document.getElementById('startMainProcedureResultSpan');

submitButton.addEventListener("click", async (_e) =>{
    // submitButton.classList.add('buttonload');
    submitButtonSpinner.style.display = 'block';
    submitButtonSpan.innerHTML = 'loading';
    loginResultLabel.innerHTML = "";
    submitButton.disabled = true;
    const { data } = await sendPost(`${config.apiURL}/check_auth`, {
        username: usernameTextBox.value,
        password: passwordTextBox.value
    }) ??{};
    const {isLoginSuccess = false} = data??{}
    if(isLoginSuccess){
        loginResultLabel.innerHTML = "login success";
        showHideScreenShareButton.style.display = 'block';
    }else{
        loginResultLabel.innerHTML = "login fail";
    }
    submitButtonSpan.classList.remove('loader');
    submitButtonSpan.innerHTML = "submit";
    submitButtonSpinner.style.display = 'none'
    submitButton.disabled = false;
});

showHideScreenShareButton.addEventListener("click", async(_e)=>{
    const isShown = showHideScreenShareSpan.innerText === 'Hide';
    if(isShown){
        showHideScreenShareSpan.innerText = 'Show';
        screenShareContainer.style.display = "none"
    }else{
        showHideScreenShareSpan.innerText = 'Hide';
        screenShareContainer.style.display = "block";
        startMainProcedureButton.style.display = "block";
    }
})

startMainProcedureButton.addEventListener("click", async(_e)=>{
    startMainProcedureButtonSpinner.style.display = 'block';
    startMainProcedureButtonSpan.innerHTML = 'loading'
    startMainProcedureButton.disabled = true;
    startMainProcedureResultSpan.display = 'block';
    const { data } = await sendPost(`${config.apiURL}/main_procedure`)
    const {isProcessSuccess = false} = data ?? {}
    if(isProcessSuccess){
        startMainProcedureResultSpan = 'process run success';
    }else{
        startMainProcedureResultSpan = 'process run failed';
    }
})