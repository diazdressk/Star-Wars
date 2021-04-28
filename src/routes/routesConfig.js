import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage,
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage,
    },
    {
        path: '*',//для всех страниц
        exact: false,//если любой адрес,не совпадающим ни с одном роутом из списка
        component: NotFoundPage,
    },
];

export default routesConfig;
