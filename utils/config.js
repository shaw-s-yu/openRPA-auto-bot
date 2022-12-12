const HOST = "http://10.40.64.171"

export default {
    screenShareURL:`${HOST}:18331`,
    apiURL:`${HOST}:3000`,
    checkAuthFlowID: "e73033b8-b21c-4532-90a0-3baf8954d11e",
    mainProcedureFlowID: "8ebb1450-bf94-4822-9231-247329789308"
}

// export const delay = ms => new Promise(res => setTimeout(res, ms));

export function delay(ms) {
    const date = Date.now();
    let currentDate = null;
    
    do {
    currentDate = Date.now();
    } while (currentDate - date < ms);
}