import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritePage from '@containers/FavoritePage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

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
        path: '/favorites',
        exact: true,
        component: FavoritePage,
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage,
    },
    {
        path: '/people/:id',//id динамический параметр,поэтому указываю через :
        exact: true,
        component: PersonPage,
    },
    {
        path: '/fail',
        exact: true,
        component: ErrorMessage,
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
