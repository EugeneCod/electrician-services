// import { useState } from 'react';

import styles from './Slider.module.scss';
import dataSlider from '../../data/slides';

const Slider = () => {

  // const [slideIndex, setSlideIndex] = useState(1);

  const handleClickNext = () => {
    console.log('next');
    // setSlideIndex(prew => prew + 1)
  }

  const handleClickPrew = () => {
    console.log('prev');
    // setSlideIndex(prew => prew - 1)
  }

  return (
    <div className={styles.container}>
      {dataSlider.map((obj) => {
        return (
          <div className={styles.slide}>
            <img src={obj.image} alt="Изображение" />
          </div>
        )
      })}
    <button className={[styles.button, styles.buttonNext].join(' ')} onClick={() => handleClickNext} />
    <button className={[styles.button, styles.buttonPrev].join(' ')}  onClick={() => handleClickPrew} />
    </div>
  )
}

export default Slider