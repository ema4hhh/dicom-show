import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Card from "./ui/card";
import SliderComponent from "./ui/slider";

function SlideShow({ images, URL }: { images: string[], URL: string }) {
  const [actualImage, setActualImage] = useState(0);
  const [imageUrl, setImageUrl] = useState(URL + "/" + images[actualImage]);
  
  const handleNextImage = () => {
    setActualImage(actualImage + 1)
  }
  
  const handlePrevImage = () => {
    if(actualImage === 0) return
    
    setActualImage(actualImage - 1)
  }
  
  
  useEffect(() => {
    if (images[actualImage] === undefined) return

    setImageUrl(URL + "/" + images[actualImage])
  }, [actualImage])

  return (
    <>
      <Card imageUrl={imageUrl} />
      
      <SliderComponent actualImage={actualImage + 1} setActualImage={setActualImage} max={ images.length } />
      
      <div>Actual Image: <b>{ actualImage }</b> </div>
      
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
