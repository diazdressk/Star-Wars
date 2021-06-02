import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UiVideo.module.css';

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    //при компДидМаунт,обращаюсь к видеоРеф, по свойству current нахожу атрибут playbackRate и задаю ему свойство,которое пришло в пропсах...по умолчанию-1, но в пропсах пришло 0.5...useRef помогает обратиться к элементам(на странице)
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      loop //вопспр по кругу
      autoPlay //автовоспр
      muted //без звука
      playbackRate={playbackRate}
      className={cn(styles.video, classes)}
      ref={videoRef}>
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  classes: PropTypes.string,
  src: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UiVideo;
