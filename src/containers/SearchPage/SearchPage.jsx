import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import UiInput from '@ui/UiInput';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PropTypes from 'prop-types';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    console.log(param);
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),//откладывает выполнение на 3 млс
    [],
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };
  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
