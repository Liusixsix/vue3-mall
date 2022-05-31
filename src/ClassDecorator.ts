import axios from 'axios';

function fun(infCode: string, method: 'get' | 'post') {
    return function (target: any, methodName: any, desc: any) {
        target.apiCode = (target.apiCode ?? '') + infCode + ';'
        desc.value = function (...argus: any[]) {
            return axios('/api', {
                method,
                data: {
                    infCode,
                    ...argus
                }
            })
        }
    }
}


function get(infCode: string) {
    return fun(infCode, 'get')
}


function post(infCode: string) {
    return fun(infCode, 'post')
}





export {
    get,
    post,
}