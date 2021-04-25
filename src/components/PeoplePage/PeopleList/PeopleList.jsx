import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ name, id, img }) => (
          <li className={styles.list__item} key={id}>
            <a href="#">
                <img className={styles.person__photo} src={img} alt={name} />
                <p>{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array//пропс people Обязательно должен быть массивом!!!
}

export default PeopleList;