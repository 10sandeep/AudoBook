import React from "react";
import BannerImg from "./assets/Banner3.png";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-10"> 
      {/* Glowing Shadow Wrapper */}
      <div className="relative w-[98%] md:w-[90%] h-[450px] md:h-[550px] rounded-3xl overflow-hidden animate-shadow-glow">
        {/* Background Image */}
        <div
          className="w-full h-full rounded-3xl"
          style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
