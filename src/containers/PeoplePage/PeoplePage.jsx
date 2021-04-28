//порядок импортов: Библиотеки-Контекст-НОС-Ui компоненты-Компоненты-Изображения-Хуки-Роуты-Сервисы-Утилиты-Константы-Стили
//ОБЯЗАТЕЛЬНО СЛЕДОВАТЬ ЭТОМУ
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResource, changeHttp } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';
import { useQueryParams } from '@hooks/useQueryParams';
const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);//НОМЕР ТЕКУЩЕЙ СТРАНИЦЫ, по умолчанию 1

    const query = useQueryParams();
    const queryPage = query.get('page');

    // console.log(prevPage, nextPage);

    const getResource = async (url) => {
        const res = await getApiResource(url);

        // console.log(res);
        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                // console.log(id);
                const img = getPeopleImage(id);
                // console.log(img);
                // console.log(name, url);
                return { id, name, img };
            });
            setPeople(peopleList);
            setPrevPage(changeHttp(res.previous));
            setNextPage(changeHttp(res.next));
            setCounterPage(getPeoplePageId(url));//устанавливаю текущую страницу
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
        // getResource('https://swapi.dev/api/people/?page=3');
    }, [queryPage]);//буду следить за изменением queryPage
    //тк я слежу за queryPage, при его изменении,происходит рендер и на страницу уже загружаются новые персонажи

    return (
        <>
            <PeopleNavigation 
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func, //setErrorApi должен быть функцией!
};
export default withErrorApi(PeoplePage);
