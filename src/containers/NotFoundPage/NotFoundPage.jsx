import { useLocation } from 'react-router-dom';
import img from './img/notfound.jpg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  let location = useLocation();//покажет путь, по которому я прошел,но которого нет
  return (
    <>
      <img className={styles.img} src={img} alt="Not " />
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  );
};

export default NotFoundPage;
