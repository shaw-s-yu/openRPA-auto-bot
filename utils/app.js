import config from './config.js'
import { sendPost } from './request.js';

const usernameTextBox = document.getElementById('usernameTextBox');
const passwordTextBox = document.getElementById('passwordTextBox');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", async (_e) =>{
    const res = await sendPost(`${config.apiURL}/check_auth`, {
        username: usernameTextBox.value,
        password: passwordTextBox.value
    });
    console.log(res);
})