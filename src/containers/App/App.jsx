import styles from './App.module.css';//модульный импорт css
import cn from 'classnames';
// console.log(styles);

const App = () => {
  return (
    <h1 className={cn(styles.header, styles.text)}>React</h1>
  )
}

export default App;
