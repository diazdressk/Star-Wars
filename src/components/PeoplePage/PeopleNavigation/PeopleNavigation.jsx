import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
    const handleChangeNext = () => getResource(nextPage); //при нажатии переходит на следующую страничку
    const handleChangePrev = () => getResource(prevPage);
    return (
        <div>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
                {/* при нажатии на кнопку срабатывает LInk и переводит на другую страницу,поэтому на батон не нужно вещать онКлик */}
                <button
                  disabled={!prevPage}//если prevPage нет,что становится disabled
                  onClick={handleChangePrev} 
                  className={styles.buttons}>
                    Previos
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
                <button
                  disabled={!nextPage} 
                  onClick={handleChangeNext} 
                  className={styles.buttons}>
                    Next
                </button>
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
};

export default PeopleNavigation;
