const TOKEN = 'access_token';
const REFRESH_TOKEN= 'refresh_token';

const getAccessToken =()=> localStorage.getItem(TOKEN);
const getRefreshToken = ()=> localStorage.getItem(REFRESH_TOKEN);
const clearTokens=()=>{
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

const saveTokens =(access, refresh)=> {
    localStorage.setItem(TOKEN, access);
    localStorage.setItem(REFRESH_TOKEN, refresh);
}

export {
    saveTokens,
    clearTokens,
    getAccessToken,
    getRefreshToken
}