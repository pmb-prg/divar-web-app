const setCookie = tokens => {
    document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`;
    document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`;
}

const clearCookie = () => {
    document.cookie = `accessToken=; max-age=0`;
    document.cookie = `refreshToken=; max-age=0`;
}

const getCookie = (cookieName) => {
    return document.cookie.split(";").find(token => token.trim().split("=")[0] === cookieName)?.split("=")[1];    
};

export  {setCookie, getCookie, clearCookie};