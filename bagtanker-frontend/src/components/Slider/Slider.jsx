import { useState } from 'react';
import style from './slider.module.scss'
import Image1 from '../../assets/slides/bread-slidebg-01.jpg';
import Image2 from '../../assets/slides/bread-slidebg-02.jpg';
import Image3 from '../../assets/slides/bread-slidebg-03.jpg';
import Image4 from '../../assets/slides/bread-slidebg-04.jpg'


export function Slider(){
    const [sliderIndex, setSliderIndex] = useState(0);
    // Billeder skal i et array
    
    const SliderImages =[Image1,Image2,Image3,Image4];
    
   
    // Back and forth knap
   
}