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

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <a className="mt-7" href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
        <br />
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Multi Cloud Automation" link="https://drive.google.com/file/d/1c7QJBi5E0FjXbzEnMSjQ54G7IkH2ni0h/view?usp=sharing" />
          <Project title="Portfolio Website" link="https://manvigupta.netlify.app/" />
          <Project title="Sudoku Solver" link="https://github.com/manvi2003/Sudoku-Solver" />

          {/* ROW 2 */}
          <Project title="Self Balancing Bot" link="https://github.com/manvi2003/Self-Balancing-Bot"/>
          <Project title="Obstacle Avoider Bot" link="https://github.com/manvi2003/Object-Avoider-Bot" />
          <Project title="Unidirectional Visitor Counter" />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
