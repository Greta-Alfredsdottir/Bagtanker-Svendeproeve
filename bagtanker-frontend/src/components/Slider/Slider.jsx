import { useState } from 'react';
import style from './slider.module.scss'
import SliderImage1 from '../../assets/SliderImages/image-1.png'
import SliderImage2 from '../../assets/SliderImages/image-2.png'
import SliderImage3 from '../../assets/SliderImages/image-3.png'


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