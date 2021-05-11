//порядок импортов: Библиотеки-Контекст-НОС-Ui компоненты-Компоненты-Изображения-Хуки-Роуты-Сервисы-Утилиты-Константы-Стили
//ОБЯЗАТЕЛЬНО СЛЕДОВАТЬ ЭТОМУ
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@store/store';

import App from '@containers/App';
import '@styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
