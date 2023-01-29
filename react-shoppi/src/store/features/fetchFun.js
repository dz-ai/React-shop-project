export const apiUrl = 'https://shoppi-api.onrender.com';
// const apiUrl = 'http://localhost:3300';
export function fetchFun (endPoint,methode ,headers, data) {
    if (methode === 'get') {
        return fetch(`${apiUrl}${endPoint}`, {
            method: methode,
            headers: headers,
        })
            .then(res => res.json())
            .then(results => results);
    } else {
        return fetch(`${apiUrl}${endPoint}`, {
            method: methode,
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(results => results);
    }
}