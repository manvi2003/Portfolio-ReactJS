import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section id="experiences" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EXPER<span className="text-white">IENCES</span>
        </p>
        <LineGradient width="mx-auto w-2/5" />
      
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-center gap-8">
        <motion.div
          className="mx-auto relative bg-cyan w-[300px] h-[320px] flex flex-col justify-center p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[95px] before:left-1/2 before:content-ct"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <a href="https://www.cloudtechner.com/" target="_blank" rel="noreferrer">
            <p className="font-playfair text-2xl text-center">CLOUDTECHNER</p>
          </a>
          <br/>
          <br/>
          <p className="text-center text-xl">
            Frontend Developer Intern
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple w-[300px] h-[320px] flex flex-col justify-center p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-tpc"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <a href="https://www.linkedin.com/company/placement-cell-lnmiit/" target="_blank" rel="noreferrer">
            <p className="font-playfair text-2xl text-center">PLACEMENT CELL, LNMIIT</p>
          </a>
          <br/>
          <br/>
          <p className="text-center text-xl">
            Executive
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red w-[300px] h-[320px] flex flex-col justify-center p-16 mt-48
            before:absolute before:top-[-100px] before:-ml-[80px] before:left-1/2 before:content-phoenix"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <a href="https://www.linkedin.com/company/phoenix-lnmiit/" target="_blank" rel="noreferrer">
            <p className="font-playfair text-2xl text-center">ROBOTICS CLUB, LNMIIT</p>
          </a>
          <br/>
          <br/>
          <p className="text-center text-xl">
            Member
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
