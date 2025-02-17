import React from "react";
import { motion } from "framer-motion";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import Image3 from "./assets/image3.png";
import Image4 from "./assets/image4.png";
import Image5 from "./assets/image5.png";
import Image6 from "./assets/image6.png";
import Image7 from "./assets/image7.png";

// Define TypeScript type for images
type ImageType = {
  id: number;
  src: string;
  alt: string;
};

// Sample images array
const images: ImageType[] = [
  { id: 1, src: Image1, alt: "Image 1" },
  { id: 2, src: Image2, alt: "Image 2" },
  { id: 3, src: Image3, alt: "Image 3" },
  { id: 4, src: Image4, alt: "Image 4" },
  { id: 5, src: Image5, alt: "Image 5" },
  { id: 6, src: Image6, alt: "Image 6" },
  { id: 7, src: Image7, alt: "Image 7" },
];

const InfiniteScrollGallery: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden mt-10 pb-1">
      <motion.div
        className=" flex w-max flex-nowrap space-x-3" // No wrapping, no gaps
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }} // Move only half to create seamless loop
        transition={{
          repeat: Infinity,
          duration: 30, // Slower smooth scroll
          ease: "linear",
          delay:2,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className=" h-72 w-auto rounded-lg shadow-md object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollGallery;
