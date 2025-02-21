import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Card from "./ui/card";
import SliderComponent from "./ui/slider";
import useImage from "./hooks/useImage";
import useImageSlider from "./hooks/useImageSlider";

function SlideShow({ images, URL }: { images: string[], URL: string }) {
  const { actualImage, sliderValue, setActualImage, setSliderValue } = useImageSlider(images)
  const imageUrl = useImage(actualImage, images, URL)
  
  const handleNextImage = () => {
    setSliderValue(sliderValue + 1)
  }
  
  const handlePrevImage = () => {
    if(sliderValue === 0) return
    
    setSliderValue(sliderValue - 1)
  }

  return (
    <>
      <Card imageUrl={imageUrl} />
      
      <SliderComponent actualImage={actualImage + 1} setSliderValue={setSliderValue} max={ images.length } />
      
      <div>Actual Image: <b>{ actualImage + 1 }</b> </div>
      
      <div className="flex flex-row">
        <button onClick={handlePrevImage}>
          <ArrowLeftIcon />
        </button>
        <button onClick={handleNextImage}>
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

export default SlideShow;
