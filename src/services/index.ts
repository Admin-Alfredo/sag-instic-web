import { TLoginData, TLoginResponse, TLoginReset } from "../types";

export const login = function (data: TLoginData): Promise<TLoginResponse> {
    return fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(async (res) => {
            const data: TLoginResponse = await res.json()
            data.status = res.status
            return data
        })
}

export const reset = function (data: TLoginReset) {
    return fetch('http://localhost:3000/api/reset/password', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('TOKEN_SGA')}` }
    })
        .then(async (res) => {
            const data: TLoginResponse = await res.json()
            data.status = res.status
            return data
        })
}