import axios from "axios";
import {getToken} from "@utils/auth";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const instance = axios.create({
    baseURL: ""
})

instance.interceptors.response.use(res => {
    NProgress.done()
    return res.data
}, err => {
    // 在请求错误时要做的事儿
    NProgress.done()
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err)
})

instance.interceptors.request.use(
    config => {
        NProgress.start();
        const token = getToken()
        if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = "Bear " +token  //请求头加上token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    })


export const get = (url, params) => {
    return instance.get(url, {
        params
    })
}

export const post = (url, data) => {
    return instance.post(url, data, {
        contentType: 'application/json'
    })
}

export const put = (url, data) => {
    return instance.put(url, data, {
        contentType: 'application/json'
    })
}

export const del = (url, params) => {
    return instance.delete(url, {
        params
    });
}
