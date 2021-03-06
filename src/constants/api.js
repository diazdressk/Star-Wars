//common общие
export const HTTPS = 'https://';
export const HTTP = 'http://';

//swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE; //https://swapi.dev/api/people/?page=
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE; //https://swapi.dev/api/people/
export const API_SEARCH = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH; //https://swapi.dev/api/people/?search=

//visualduide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'; //все фотки
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg'; //РАСШИРЕНИЕ

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE; //персонаж
