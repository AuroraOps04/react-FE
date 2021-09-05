import * as Constants from "./constants";


export const setToken = token => {
    localStorage.setItem(Constants.TOKEN, token)
}
export const getToken = () => {
    return localStorage.getItem(Constants.TOKEN)
}
export const clearToken = () => {
    localStorage.removeItem(Constants.TOKEN)
}
