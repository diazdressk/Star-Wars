//порядок импортов: Библиотеки-Контекст-НОС-Ui компоненты-Компоненты-Изображения-Хуки-Роуты-Сервисы-Утилиты-Константы-Стили
//ОБЯЗАТЕЛЬНО СЛЕДОВАТЬ ЭТОМУ
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResource(url);
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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);

    return (
        <>
            <h1 className="header__text">Navigation</h1>
            {people && <PeopleList people={people} />}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func, //setErrorApi должен быть функцией!
};
export default withErrorApi(PeoplePage);
