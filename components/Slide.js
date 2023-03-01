import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slide = ({ image }) => {
  return <Image src={image.src} alt={image.alt} width={600} height={400} />;
};

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div>sdqkfjhsdkfj</div>
      <Slide image={images[index]} />
    </>
  );
};

export default Slider;
