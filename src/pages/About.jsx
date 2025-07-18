import ScrambledText from "../components/ScrambledText";
import ShinyText from "../components/ShinyText";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full px-4 sm:px-10 py-10 text-whit">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mt-6 mb-2"
      >
        <h1>About</h1>
        <p className="text-2xl font-light text-zinc-400 mt-2">
          <ShinyText
            text="Indian Space Research Organisation"
            disabled={false}
            speed={6}
            className="custom-class"
          />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10"
      >
        <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=". :">
          <p className="text-base sm:text-lg font-light text-center max-w-4xl mx-auto leading-relaxed">
            Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and
            technology to harvest the benefits of outer space for India and mankind. ISRO, formed in 1969, is a major constituent of the
            Department of Space (DOS), Government of India. Its prime objective is the development and application of space technology for
            various national needs. With major centers across India, ISRO builds launch vehicles, satellites, and supports science education
            through its missions and institutions.
          </p>
        </ScrambledText>
      </motion.div>

      <motion.div className="mt-16 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">Mission & Vision</h2>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          <strong>Mission:</strong> Harness space technology for national development while pursuing space science research and planetary
          exploration. <br />
          <strong>Vision:</strong> Be a key contributor to global space research and peaceful use of outer space for the benefit of
          humanity.
        </p>
      </motion.div>

      <motion.div className="mt-16 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">Key Milestones</h2>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2 text-base sm:text-lg">
          <li>1962 – INCOSPAR founded under Dr. Vikram Sarabhai</li>
          <li>1969 – ISRO established</li>
          <li>1975 – Aryabhata: India’s first satellite</li>
          <li>1994 – First successful PSLV launch</li>
          <li>2008 – Chandrayaan-1: India’s first Moon mission</li>
          <li>2013 – Mars Orbiter Mission (Mangalyaan)</li>
          <li>2023 – Chandrayaan-3 successfully landed on Moon’s south pole</li>
        </ul>
      </motion.div>

      <motion.div className="mt-16 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">Organizational Structure</h2>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2 text-base sm:text-lg">
          <li><strong>ISRO HQ:</strong> Bengaluru</li>
          <li><strong>VSSC:</strong> Launch Vehicle R&D – Thiruvananthapuram</li>
          <li><strong>URSC:</strong> Satellite R&D – Bengaluru</li>
          <li><strong>SDSC-SHAR:</strong> Launch operations – Sriharikota</li>
          <li><strong>LPSC:</strong> Propulsion systems – Valiamala & Bengaluru</li>
          <li><strong>SAC:</strong> Application systems – Ahmedabad</li>
          <li><strong>NRSC:</strong> Remote sensing & data – Hyderabad</li>
        </ul>
      </motion.div>

      <motion.div className="mt-16 max-w-4xl mx-auto pb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">Leadership</h2>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          The ISRO Chairman also serves as the Secretary of the Department of Space and Chairman of the Space Commission. This leadership
          ensures strategic direction, policy formulation, and successful implementation of India’s space program.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
