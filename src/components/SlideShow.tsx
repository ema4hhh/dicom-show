import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Card from "./ui/card";
import SliderComponent from "./ui/slider";
import useImageUrl from "./hooks/useImageUrl";
import useImageSlider from "./hooks/useImageSlider";

function SlideShow({ images, URL }: { images: string[], URL: string }) {
  const { actualImage, sliderValue, setActualImage, setSliderValue } = useImageSlider(images)
  const imageUrl = useImageUrl(actualImage, images, URL)
  
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
      
      <div className="absolute top-1 right-1 bg-slate-300 py-1 px-2 rounded-md">Actual Image: <b>{ actualImage + 1 }</b> </div>
    </>
  );
}

export default SlideShow;
