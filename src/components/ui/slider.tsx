import * as React from "react";
import { Slider } from "radix-ui";

function SliderComponent({ actualImage, setSliderValue, max }) {
  const handleChange = (number) => {
    if(number[0] === 0) return setSliderValue(number[0]);
    setSliderValue(number[0] - 1)
  }
  
  return(
		<Slider.Root
			className="relative flex h-5 w-[200px] touch-none select-none items-center"
			defaultValue={[actualImage]}
			max={max}
			step={1}
			onValueChange={handleChange}
		>
			<Slider.Track className="relative h-[3px] grow rounded-full bg-slate-300">
				<Slider.Range className="absolute h-full rounded-full bg-slate-800" />
			</Slider.Track>
			<Slider.Thumb
				className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
				aria-label="Volume"
			/>
		</Slider.Root>


  )
}

export default SliderComponent;
