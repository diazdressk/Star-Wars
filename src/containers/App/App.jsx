// import cn from 'classnames';//в аргументы передаю имена классов classnames(styles.header, styles.text) и тд
import styles from './App.module.css';//модульный импорт css
// console.log(styles);
// import { getApiResource } from '../../utils/network';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Header from '@components/Header';
import routesConfig from '@routes/routesConfig';
import {REPO_NAME} from '@constants/repo';

const App = () => {
    return (
        <>
            <BrowserRouter basename={`/${REPO_NAME}/`}>
                <div className={styles.wrapper}>
                    <Header />
                    <Switch>
                        {/* Switch группирует роуты,прохзодится по ним и выбирает первое совпадение */}
                        {routesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
