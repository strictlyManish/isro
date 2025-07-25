import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    const target = document.getElementById("next-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 overflow-hidden">
      <video
        src="/bannervido.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="tracking-tighter text-white">
            <motion.span
              className="font-serif italic font-normal text-5xl md:text-6xl lg:text-8xl block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Indian Space Research Organisation
            </motion.span>
          </h1>
          <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
            Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the benefits
          </p>

          <motion.div
            className="flex items-center justify-center mt-8 space-x-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              className="px-5 py-2 text-black bg-white rounded-full font-semibold hover:bg-opacity-90"
              onClick={() => navigate("/about")}
            >
              Get started
            </button>

            <button
              onClick={() => navigate("/engangements")}
              className="flex items-center px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669V18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                />
              </svg>
              Engangements
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button
          onClick={handleScroll}
          className="inline-flex items-center justify-center w-12 h-12 text-white bg-black rounded-full hover:bg-white hover:text-black"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
