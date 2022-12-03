const HOST = "http://localhost"

export default {
    screenShareURL:`${HOST}:18331`,
    apiURL:`${HOST}:3000`,
    checkAuthFlowID: "e73033b8-b21c-4532-90a0-3baf8954d11e"
}

// export const delay = ms => new Promise(res => setTimeout(res, ms));

export function delay(ms) {
    const date = Date.now();
    let currentDate = null;
    
    do {
    currentDate = Date.now();
    } while (currentDate - date < ms);
    }