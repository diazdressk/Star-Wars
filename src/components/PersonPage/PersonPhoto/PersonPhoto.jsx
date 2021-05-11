import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName, personId, setPersonFavorite, personFavorite }) => {
    const dispatch = useDispatch();

    const set = () => {
        dispatch(
            setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto,
                },
            }),
        );
        setPersonFavorite(true);
    };
    const remove = () => {
        dispatch(removePersonFromFavorite(personId));
        setPersonFavorite(false);
    };
    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
            </div>
            {personFavorite ? ( //если personFavorite, если выбран как Избранное, удаляю, если нет в Избранных, то добавляю
                <button onClick={remove}>Удалить</button>
            ) : (
                <button onClick={set}>Добавить</button>
            )}
            
        </>
    );
};

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
