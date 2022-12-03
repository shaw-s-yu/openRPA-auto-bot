export const sendPost = async (url, body) => {
    let response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body)
    });
    const res = await response.json();
    if(res.status!=200){
        throw new Error(res.message);
    }
    return res;
}