import React, { useState, useEffect } from "react";
import { useStore } from "../store/useStore"; // Import dark mode state
import BannerImg1 from "../components/assets/BannerImg1.png";
import BannerImg2 from "../components/assets/BannerImg2.png";
import BannerImg3 from "../components/assets/BannerImg3.png";

interface SlideData {
  id: number;
  title: string;
  offer: string;
  buttonText1: string;
  buttonText2: string;
  imgSrc: string;
}

const Banner: React.FC = () => {
  const sliderData: SlideData[] = [
    {
      id: 1,
      title: "Immerse Yourself in Stories - Explore Audiobooks Now!",
      offer: "Limited Time Offer: 30% Off on Bestsellers",
      buttonText1: "Start Listening",
      buttonText2: "Browse Collection",
      imgSrc: BannerImg1, // Replace with an audiobook-related image
    },
    {
      id: 2,
      title: "A World of Stories Awaits - Discover Your Next Audiobook!",
      offer: "Hurry up! Get a Free Trial Today!",
      buttonText1: "Get Started",
      buttonText2: "See Plans",
      imgSrc: BannerImg2, // Replace with another relevant image
    },
    {
      id: 3,
      title: "Listen Anywhere, Anytime - Unlock Endless Audiobooks!",
      offer: "Exclusive Deal: 1st Month Free",
      buttonText1: "Subscribe Now",
      buttonText2: "Learn More",
      imgSrc: BannerImg3, // Add an image of someone listening to an audiobook
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { darkMode } = useStore(); // Fetch dark mode state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-[90%] max-w-7xl overflow-hidden"> {/* Reduced Width */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col-reverse md:flex-row items-center justify-between py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full
              ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
            >
              <div className="md:pl-8 mt-10 md:mt-0">
                <p className=" font-poppins md:text-base text-orange-500 pb-1">{slide.offer}</p>
                <h1 className="max-w-lg md:text-[32px] md:leading-[40px] text-xl font-semibold">
                  {slide.title}
                </h1>
                <div className=" font-poppins flex items-center mt-4 md:mt-6">
                  <button className="  md:px-8 px-6 md:py-2 py-1.5 bg-orange-600 rounded-full text-white font-medium hover:bg-orange-700 transition">
                    {slide.buttonText1}
                  </button>
                  <button className=" group flex items-center gap-2 px-6 py-2.5 font-medium text-orange-500 hover:text-orange-700 transition">
                    {slide.buttonText2}
                  </button>
                </div>
              </div>
              <div className="flex items-center flex-1 justify-center">
                <img
                  className="md:w-64 w-40 brightness-90 dark:brightness-75 transition-all"
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {sliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                currentSlide === index
                  ? "bg-orange-600 scale-110"
                  : darkMode
                  ? "bg-gray-500/50"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
