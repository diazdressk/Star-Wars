import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderBlack from './img/loader-black.svg';
import styles from './UiLoading.module.css';

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);
    useEffect(() => {
        switch (theme) {
            case 'black':
                setLoaderIcon(loaderBlack);
                break;
            case 'blue':
                setLoaderIcon(loaderBlue);
                break;
            case 'white':
                setLoaderIcon(loaderWhite);
                break;
            default:
                setLoaderIcon(loaderBlack);
        }
    }, []);

    return (
        <img
            className={cn(styles.loader, isShadow && styles.shadow, classes )}
            src={loaderWhite}
            alt="loader"
        />
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
};

export default UiLoading;