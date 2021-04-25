import {
    SWAPI_PEOPLE,
    HTTP,
    SWAPI_ROOT,
    GUIDE_IMG_EXTENSION,
    URL_IMG_PERSON,
} from '@constants/api';

const getId = (url, category) => {
    const id = url
        .replace(HTTP + SWAPI_ROOT + category, '') //получаю /1/
        .replace(/\//g, ''); //убираю два слеша по краям цифр регексами, останется просто цифра- id персонажа
    return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE); //вычленяю id персонажа

export const getPeopleImage = (id) => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;//собираю путь до картинки персонажа
