import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';
import styles from './PersonPhoto.module.css';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const PersonPhoto = ({ personPhoto, personName, personId, setPersonFavorite, personFavorite }) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(
                setPersonToFavorite({
                    [personId]: {
                        name: personName,
                        img: personPhoto,
                    },
                }),
            );
            setPersonFavorite(true);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img
                    onClick={dispatchFavoritePeople}
                    alt="Add to favorite"
                    className={styles.favorite}
                    src={personFavorite ? iconFavoriteFill : iconFavorite}>
                    {/*если personFavorite, если выбран как Избранное, удаляю, если нет в Избранных, то добавляю */}
                </img>
            </div>
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
