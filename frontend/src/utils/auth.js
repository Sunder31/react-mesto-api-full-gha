export const BASE_URL = 'http://localhost:5173/';//сюда ссылку api

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

export const checkToken = () => { // принимает token если не удалять авторизацию
    return fetch(`${BASE_URL}users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`, удалить?
        },
    }).then((res) => {
        return getResData(res);
    });
}