//ЗАПРОС НА СЕРВЕР
import { HTTP, HTTPS } from '@constants/api';

/**jdoc комментарий называется, можно вот так документировать, |** *|- выводится при таком написании
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url -url для изменения
 * @returns {String} - urls c HTTPS
 */
export const changeHttp = (url) => (url ? url.replace(HTTP, HTTPS) : url); //меняет http на https,тк в гитхабе можно отправлять заропсы только на https,а сервер у меня на http

// export const getApiResource = (url) => {
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch(err => console.error(err.message));
// };

/**
 * Отправляет запрос fetch
 * @param {String} url -url для запроса
 * @returns {Promise} -Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    //асинхронно
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));     //так промисом

// (async () => {
//     //либо так асинхронно, самовызывающаяся функция
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();

/**
 * приходит массв фильмов, перебираю его, беру один url, и fetch'у
 * @param {arr} url 
 * @returns 
 */
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(
        url.map((res) => {
            return fetch(res).then((res) => res.json());
        }),
    );
    return res;
};
