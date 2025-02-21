import { useEffect, useState } from "react";

function useImageUrl(actualImage: number, images: string[], URL: string) {
  const [imageUrl, setImageUrl] = useState<string>(URL + "/" + images[actualImage]);

  useEffect(() => {
    setImageUrl(URL + "/" + images[actualImage]);
  }, [actualImage]);

  return imageUrl;
}

export default useImageUrl;