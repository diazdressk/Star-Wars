import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Favorite.module.css';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';
const Favorite = () => {
    const [count, setCount] = useState();
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);//максимум 99,двухзначное число в каунтере
    });

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img src={icon} alt="Favorites" className={styles.icon} />
            </Link>
        </div>
    );
};

export default Favorite;
