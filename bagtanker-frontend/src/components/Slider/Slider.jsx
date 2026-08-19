import { useState } from 'react';
import style from './slider.module.scss'
import Image from '../../assets/slides/bread-slidebg-01.jpg';
import Image from '../../assets/slides/bread-slidebg-02.jpg';
import Image from '../../assets/slides/bread-slidebg-03.jpg'


export function Slider(){
    const [sliderIndex, setSliderIndex] = useState(0);
    // Billeder skal i et array
    // Back and forth knap
    const SliderImages =[SliderImage1,SliderImage2,SliderImage3];
    
    function forward(){
        if (sliderIndex >= SliderImages, length){
            setSliderIndex(0)
        }   else setSliderIndex(prev => prev + 1)
    }

    function back(){
        if (sliderIndex === 0){
            setSliderIndex(SliderImages.length -1)
        }   else setSliderIndex((prev) => prev -1)
    }

    return(
        <figure className={style.sliderStyle}>
            <img src={SliderImages[sliderIndex]} />
            <figcaption>
            <button onClick={() => back()}>Previous</button>
            <button onClick={() => forward()}>Next</button>
            </figcaption>
        </figure>
    )
}