//ЗАПРОС НА СЕРВЕР

// export const getApiResource = (url) => {
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch(err => console.error(err.message));
// };

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
