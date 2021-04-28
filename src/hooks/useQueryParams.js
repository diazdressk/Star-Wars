import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
    // console.log(URLSearchParams(useLocation().search));
    return new URLSearchParams(useLocation().search);//придет объект
}