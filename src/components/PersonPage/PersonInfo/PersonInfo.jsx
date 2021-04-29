import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {personInfo.map(
                    (
                        { title, data }, //ебучая скобка!ВСЕГДА СТАВИТЬ ((((((((())))))))), НЕ {}
                    ) =>
                        data && ( //если дата есть(а то иногда массы не будет оказать,он в дата)
                            <li className={styles.list__item} key={title}>
                                <span className={styles.list__title}>{title}</span>: {data}
                            </li>
                        ),
                )}
            </ul>
        </div>
    );
};

PersonInfo.propTypes = {
    personInfo: PropTypes.array,
};

export default PersonInfo;
