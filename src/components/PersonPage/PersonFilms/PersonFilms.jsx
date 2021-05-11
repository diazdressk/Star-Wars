import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeConcurrentRequest, changeHttp } from '@utils/network';
import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    // console.log(personFilms);
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHttps = personFilms.map((url) => changeHttp(url)); //http меняю на https для гитхаба
            const response = await makeConcurrentRequest(filmsHttps);
            setFilmsName(response);
        })();
    }, []);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a, b) => a.episode_id - b.episode_id)//сортировка по возрастанию
                    .map(({ title, episode_id }) => (
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episode}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
    PersonFilms: PropTypes.array,
};

export default PersonFilms;
