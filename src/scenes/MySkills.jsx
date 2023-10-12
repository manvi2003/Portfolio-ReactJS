import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skill = ({ title }) => {
  const skillTitle = title.toLowerCase();

  return (
    <motion.div
      variants={skillVariant}
      className="relative"
      whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.div whileHover={{ filter: "brightness(150%)" }}>
        <img src={`../assets/${skillTitle}.png`} alt={skillTitle} />
      </motion.div>
    </motion.div>
  );
};

const MySkills = () => {
  return (
    <section id="skills" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red"> SKILLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/2" />
          </div>
          <br />
          <br />
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Skill title="HTML" />
          <Skill title="CSS" />
          <Skill title="JS" />
          <Skill title="TAILWIND" />
          <Skill title="REACTJS" />

          {/* ROW 2 */}
          <Skill title="CPP" />
          <Skill title="PYTHON" />
          <Skill title="MONGODB" />
          <Skill title="CANVA" />
          <Skill title="FIGMA" />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
