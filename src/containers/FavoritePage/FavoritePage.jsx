import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';
import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [people, setPeople] = useState([]);
    const storeData = useSelector((state) => state.favoriteReducer);
    // console.log(storeData);

    useEffect(() => {//показываю персонажа в избранных
        const arr = Object.entries(storeData);
        // console.log(arr);
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    // name: item[1].name,      либо так
                    // img: item[1].img,
                    ...item[1]//либо так
                }
            })
            setPeople(res);
        } 
    }, []);

    return (
        <>
            <h1 className='header__text'>FavoritePage</h1>
            {people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No data</h2>}
            
        </>
    );
};

export default FavoritePage;
