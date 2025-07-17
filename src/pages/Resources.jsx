import { motion } from "framer-motion";
import ShinyText from "../components/ShinyText";
import { FaExternalLinkAlt } from "react-icons/fa";

const programmesData = [
  {
    title: "Indian Institute of Remote Sensing (IIRS), Dehradun",
    description: `IIRS is a premier institute for capacity building in Remote Sensing and Geo-informatics, offering M.Tech, M.Sc., and PG-Diploma programmes. It also supports the UN-affiliated CSSTE-AP for international training.`,
    link: "https://www.sheryians.com/",
  },
  {
    title: "Academic Collaboration – M.Sc. in Agriculture Analytics",
    description: `DA-IICT, AAU, and IIRS jointly offer a 2-year multidisciplinary M.Sc. program combining agriculture and data analytics. It prepares students for the future of predictive agriculture.`,
    link: "https://www.sheryians.com/",
  },
  {
    title: "Courses for International Students",
    description: `IIRS offers international PG-level training under CSSTE-AP, affiliated with the UN, with course durations from 1 week to 2 years.`,
    link: "https://www.sheryians.com/",
  },
  {
    title: "Indian Institute of Space Science and Technology (IIST), Thiruvananthapuram",
    description: `IIST, Asia’s first Space University, offers UG, PG, doctoral, and post-doctoral courses in space science, tech, and applications to support India’s space programme.`,
    link: "https://www.sheryians.com/",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Programmes() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12 bg-gradient-to-b text-white">
      <div className="p-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mt-6 mb-2"
        >
          <h1>Programmes</h1>
          <p className="text-2xl font-light text-zinc-300 mt-2">
            <ShinyText
              text="Indian Space Research Organisation"
              disabled={false}
              speed={6}
              className="custom-class"
            />
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
        {programmesData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300 text-base mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-orange-400 hover:text-orange-300 underline"
            >
              Learn More <FaExternalLinkAlt className="ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
