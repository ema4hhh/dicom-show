import { DownloadIcon } from "@radix-ui/react-icons";
import { useState, type FormEvent } from "react";

function DownloadForm({ API }) {
  const [start, setStart] = useState(0);
    const [end, setEnd] = useState(165);
  
  const handleClick = async (e) => {
    e.preventDefault()
    console.log("Hijueputa")
    const response = await fetch(API + "?start=" + start + "&end=" + end)
    console.log(response)
    if (!response.ok) {
      alert("Error al obtener el video");
      return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.mp4";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  
  return <>
      <div className="flex w-[512px] justify-between">
        <button onClick={handleClick} type="submit" className=" border-2 border-gray-300 rounded-md py-1 px-2"><DownloadIcon/></button>
        
          <label className=" border-2 border-gray-300 rounded-md py-1 px-2">Start:
            <input type="number" defaultValue={0} className="w-24" onChange={(e) => setStart(parseInt(e.target.value))} />
          </label>
        
        <label className=" border-2 border-gray-300 rounded-md py-1 px-2">End:
        <input type="number" defaultValue={165} className="w-24" onChange={(e) => setEnd(parseInt(e.target.value))} />
        </label>
      </div>
  </>
}

export default DownloadForm;
