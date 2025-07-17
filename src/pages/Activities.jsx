import React, { useState } from "react";
import { motion } from "framer-motion";
import TiltedCard from "../components/TiltedCard";
import ShinyText from '../components/ShinyText';

function Activities() {
  const [missions] = useState([
    {
      title: "Spacecraft Missions",
      no: 131,
      url: "https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/spacecraft_large.png.webp",
    },
    {
      title: "Satellites by Private or Students",
      no: 18,
      url: "https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/astrosat_large.png.webp",
    },
    {
      title: "Foreign Satellites Launched",
      no: 433,
      url: "https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/amazonia-1_large.png.webp",
    },
    {
      title: "Re-entry Missions & POEMS",
      no: 9,
      url: "https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/pslvc52_large.jpg.webp",
    },
    {
      title: "Launch Missions",
      no: 101,
      url: "https://www.isro.gov.in/media_isro/image/media/Missions/Missionsaccomplished/resized/gslv-mkiii-x-13_large.jpg.webp",
    },
    {
      title: "Launches Facilitated by ISRO",
      no: 2,
      url: "https://www.isro.gov.in/media_isro/image/index/PSLVC54/EOS_06/satlite_large.jpg.webp",
    },
    {
      title: "Gaganyaan (Human Spaceflight)",
      no: 1,
      url: "https://www.isro.gov.in/media_isro/image/TVD1/BPT_7835.jpg.webp",
    },
  ]);

  return (
    <motion.div
      className="w-full px-4 sm:px-10 py-10 bg-zinc-900 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-3xl sm:text-4xl font-bold text-center mt-4 mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1>Activities</h1>
        <p className="text-2xl font-light text-zinc-400 mt-2">
          <ShinyText text="Indian Space Research Organisation" disabled={false} speed={6} className='custom-class' />
        </p>
      </motion.div>

      <motion.div
        className="mt-10 max-w-5xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-base sm:text-lg text-justify text-zinc-300 leading-relaxed">
          <strong>Department of Space (DOS)</strong> is a Government of India
          department mandated with the execution of the Indian Space Programme.
          DOS has evolved several initiatives for promoting and developing the
          application of space science and technology for national development.
        </p>

        <ul className="grid gap-6 sm:grid-cols-2">
          <li className="bg-zinc-700 rounded-md p-5 hover:bg-gray-600 cursor-pointer">
            🚀 <strong>Launch Vehicle Programme</strong> – Indigenous capability
            to launch satellites.
          </li>
          <li className="bg-zinc-700 rounded-md p-5 hover:bg-gray-600 cursor-pointer">
            📡 <strong>INSAT Programme</strong> – For telecom, broadcasting,
            meteorology, and education.
          </li>
          <li className="bg-zinc-700 rounded-md p-5 hover:bg-gray-600 cursor-pointer">
            🌍 <strong>Remote Sensing Programme</strong> – Use of satellite
            imagery for development.
          </li>
          <li className="bg-zinc-700 rounded-md p-5 hover:bg-gray-600 cursor-pointer">
            🔬 <strong>R&D in Space Science</strong> – Focusing on scientific and
            technological advancements.
          </li>
        </ul>

        <h2 className="text-orange-500 text-lg sm:text-xl font-medium pt-6">
          Department of Space, through ISRO, accomplishes space missions to
          fulfil its vision and objectives. Below are some key statistics:
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {missions.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-full sm:w-[300px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <TiltedCard
              imageSrc={item.url}
              altText={item.title}
              captionText={item.title}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text m-6 p-2 rounded-full bg-zinc-700 text-white text-[1rem] backdrop:blur-md">
                  Mission: <span className="text-orange-500 font-bold">{item.no}</span>
                </p>
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Activities;
