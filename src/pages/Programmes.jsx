import { motion } from "framer-motion";

const programmesData = [
  {
    title: "Indian Institute of Remote Sensing (IIRS), Dehradun",
    description: `IIRS is a premier institute for capacity building in Remote Sensing and Geo-informatics, offering M.Tech, M.Sc., and PG-Diploma programmes. It also supports the UN-affiliated CSSTE-AP for international training.`,
    link: "https://www.sheryians.com/",
  },
  {
    title: "Academic Collaboration – M.Sc. in Agriculture Analytics",
    description: `DA-IICT, AAU, and IIRS jointly offer a 2-year multidisciplinary M.Sc. program combining agriculture and data analytics. It prepares students for the future of predictive agriculture.`,
    link: "https://www.sheryians.com/2",
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
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Educational Programmes</h2>
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-16">
        Under the Department of Space (DOS), premier institutes like IIST and IIRS offer world-class academic programmes supporting India’s space ambitions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {programmesData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-slate-600"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
