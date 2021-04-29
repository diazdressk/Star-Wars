import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {makeConcurrentRequest, changeHttp} from '@utils/network';
import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
  // console.log(personFilms);
  const [filmsName, setFilmsName] = useState([]);

  const useEffect(() => {
    (async () => {
      const filmsHttps = personFilms.map(url => changeHttp(url));//http меняю на https для гитхаба
    })();
  }, []);
  
  return (
    <>PersonFilms</>
  )
}

PersonFilms.propTypes = {
  PersonFilms: PropTypes.array,
}

export default PersonFilms;