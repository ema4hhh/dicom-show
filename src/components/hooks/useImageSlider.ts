import { useEffect, useState } from "react";

function useImageSlider(images: string[]) {
  const [actualImage, setActualImage] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  
  useEffect(() => {
    if (images[actualImage] === undefined) return

    let timer;
    
    if(actualImage !== sliderValue) {
      timer = setTimeout(() => {
        setActualImage(prevState => {
          const newValue = prevState > sliderValue ? prevState - 1 : prevState + 1;
          return newValue;
        })
      }, 500)
    } 
    
    return () => {
      clearTimeout(timer)
    }
  }, [sliderValue, actualImage])

  return {
    actualImage,
    sliderValue,
    setActualImage,
    setSliderValue
  }
}

export default useImageSlider;