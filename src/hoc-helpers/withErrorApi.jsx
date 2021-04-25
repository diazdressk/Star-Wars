// hoc называются с with
import { useState } from 'react';
import ErrorMessage from '@components/ErrorMessage';

export const withErrorApi = (View) => {
    return (props) => {
        const [errorApi, setErrorApi] = useState(false); //проверка пришло ли чтолибо с сервера
        return <>{errorApi ? <ErrorMessage /> : <View setErrorApi={setErrorApi} {...props} />}</>;
    };
};
