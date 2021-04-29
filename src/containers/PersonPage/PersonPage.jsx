import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import PersonFilms from '@components/PersonPage/PersonFilms';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import styles from './PersonPage.module.css';

const PersonPage = ({ match, setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);

    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}/`);
            // console.log(res);
            if (res) {
                //если ответ не ОК,то отрендерю интерфейс НотФаунд
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
                // console.log('films', res.films);
                
                res.films.length && setPersonFilms(res.films);//res.films это массив, если он не пустой(фильмы есть), записываю их personFimls...задачаю через setPersonFilms(res.films)
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })(); //асинхронная самовызывающаяся анонимная функция
    }, []);
    // console.log(personInfo);
    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto personPhoto={personPhoto} personName={personName} />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && <PersonFilms personFilms={personFilms} />}
                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
