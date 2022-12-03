import config from './config.js'

const usernameTextBox = document.getElementById('usernameTextBox');
const passwordTextBox = document.getElementById('passwordTextBox');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", async (_e) =>{
    console.log(usernameTextBox.value)
    let response = await fetch(`${config.apiURL}/check_auth`, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            username: usernameTextBox.value,
            password: passwordTextBox.value
        })
    });
    const res = await response.json();
    console.log(res);
})