export const BASE_URL = 'api.sunder.mesto.nomoredomainsmonster.ru/';

const getResData = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        return getResData(res);
    });
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        return getResData(res);
    });
}

export const checkToken = () => {
    return fetch(`${BASE_URL}users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        return getResData(res);
    });
    
}

export const logout = () => {
    return fetch(`${BASE_URL}logout `, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        return getResData(res);
    });
};