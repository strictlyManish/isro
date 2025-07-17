import { motion } from "framer-motion";
import ShinyText from "../components/ShinyText";


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

const initiatives = [
  "Sponsored Research (RESPOND)",
  "Regional Academic Centres for Space [RAC-S]",
  "Space Technology Incubation Centres [S-TICs]",
  "Space Technology Cells [STC]",
  "Space Innovation Centre",
  "ISRO Chairs",
  "Centre of Excellence on Advanced Mechanics of Materials",
  "Satish Dhawan Centre for Space Science",
  "Centre for Nano Science & Engineering (CeNSE)",
];

function Engagements() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12 bg-gradient-to-b text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Engagements</h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto text-gray-300 text-sm sm:text-base mb-12"
      >
         <p className="text-2xl font-light text-zinc-400 mt-2">
          <ShinyText
            text="Indian Space Research Organisation"
            disabled={false}
            speed={6}
            className="custom-class"
          />
        </p>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600"
        >
          <h3 className="text-xl font-semibold mb-3">Sponsored Research</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            ISRO invites proposals from academia for joint research in space-focused areas. A Principal Investigator from the institute and a Co-PI from ISRO collaborate under mutually agreed terms, timelines, and funding reviewed by ISRO committees.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600"
        >
          <h3 className="text-xl font-semibold mb-3">ISRO Cells in Institutions</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            ISRO has established research cells like STCs at IITs/IISc, S-TICs at NITs for entrepreneurship-driven projects, RAC-S for regional collaboration, and several Centres of Excellence to expand scientific reach and impact.
          </p>
        </motion.div>
      </div>

      <motion.div
        custom={2}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-600 max-w-4xl mx-auto mb-16"
      >
        <h3 className="text-xl font-semibold mb-4">Capacity Building Initiatives</h3>
        <p className="text-gray-300 text-sm sm:text-base mb-4">
          ISRO has launched a variety of initiatives to enhance academia's participation in space research. Each program is uniquely tailored — from promoting student entrepreneurship to strengthening research infrastructure and mentorship.
        </p>
        <ul className="list-disc list-inside text-gray-200 space-y-1 pl-2">
          {initiatives.map((item, index) => (
            <li key={index} className="text-sm sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.img
          src="https://www.isro.gov.in/media_isro/image/academia/resized/academia_large.png.webp"
          alt="ISRO Academia Engagements"
          className="rounded-xl w-full shadow-2xl border border-slate-700"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
export default Engagements;
