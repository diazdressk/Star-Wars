export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data !== null) {//если у ключа нет даты, то верну пустой объект
        return JSON.parse(data);
    }
    return {};
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}