import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import dataSlider from '../../data/slides';

let cx = classNames.bind(styles);

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  const handleClickNext = () => {
    console.log('next');
    slideIndex !== dataSlider.length ? setSlideIndex((prew) => prew + 1) : setSlideIndex(1);
  };

  const handleClickPrew = () => {
    console.log('prev');
    setSlideIndex((prew) => prew - 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {dataSlider.map((obj, index) => {
          return (
            <div
              className={cx({
                slide: true,
                active: slideIndex === index + 1,
              })}
              key={obj.id}>
              <img src={obj.image} alt="Изображение" />
              <div className={styles.textBlock}>
                <p className={styles.text}>{obj.text}</p>
              </div>
            </div>
          );
        })}
        <button
          className={[styles.button, styles.buttonNext].join(' ')}
          onClick={handleClickNext}
        />
        <button
          className={[styles.button, styles.buttonPrev].join(' ')}
          onClick={handleClickPrew}
        />
        <div className={styles.containerDots}>
          {Array.from({ length: dataSlider.length }).map((_item, index) => (
            <div
              className={cx({
                dot: true,
                active: slideIndex === index + 1,
              })}
              onClick={() => setSlideIndex(index + 1)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
