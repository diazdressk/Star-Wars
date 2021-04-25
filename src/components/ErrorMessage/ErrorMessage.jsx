import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of the forse has won. <br />
                We cannot display data.
                <br />
                Come back when we fix everything.
            </p>
        </>
    );
};

export default ErrorMessage;
