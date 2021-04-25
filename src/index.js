//порядок импортов: Библиотеки-Контекст-НОС-Ui компоненты-Компоненты-Изображения-Хуки-Роуты-Сервисы-Утилиты-Константы-Стили
//ОБЯЗАТЕЛЬНО СЛЕДОВАТЬ ЭТОМУ
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@containers/App';
import '@styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
