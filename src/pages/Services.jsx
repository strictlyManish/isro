import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaMapMarkerAlt, FaSatellite, FaBuilding } from "react-icons/fa";

const servicesData = [
  {
    title: "Launch Services",
    icon: <FaRocket className="text-orange-500 text-4xl" />,
    description:
      "ISRO has been providing commercial satellite launch services using PSLV, GSLV, LVM3 and now SSLV through its commercial arm. Notable missions include the record 104-satellite launch by PSLV-C37.",
  },
  {
    title: "Spaceport: SHAR",
    icon: <FaMapMarkerAlt className="text-orange-500 text-4xl" />,
    description:
      "Located in Sriharikota near Chennai, Satish Dhawan Space Centre (SHAR) is India’s main launch site, equipped with state-of-the-art facilities for satellite and rocket integration and launch.",
  },
  {
    title: "Launch Complexes",
    icon: <FaBuilding className="text-orange-500 text-4xl" />,
    description:
      "SHAR has two operational launch pads (FLP & SLP) with complete vehicle assembly, cryo & propellant servicing, and advanced tracking systems for LEO, GEO and sounding rocket launches.",
  },
  {
    title: "Satellite Deployment",
    icon: <FaSatellite className="text-orange-500 text-4xl" />,
    description:
      "Using multiple launchers, ISRO deploys payloads to a range of orbits (LEO, GTO, etc.) via dedicated or ride-share missions. NSIL handles commercial deployment for domestic and foreign clients.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

function Services() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        ISRO Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-zinc-400 max-w-2xl mx-auto mb-10"
      >
        Discover the cutting-edge launch services, infrastructure, and expertise that power India's journey through space.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:bg-zinc-700 transition-colors"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-zinc-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
