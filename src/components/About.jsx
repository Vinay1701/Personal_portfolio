import React from "react";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../HigherOrderFunction";
import Tilt from "react-parallax-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 1)}
      className=""
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="violet"
        glarePosition="all"
        glareBorderRadius="20px"
        className="w-[16rem] green-pink-gradient p-[0.2rem] rounded-[20px] shadow-card"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="bg-tertiary px-12 py-5 min-h-[240px] rounded-[20px] flex flex-col justify-evenly items-center"
          // style={{transform: 'translateZ(60px)'}}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[1rem] font-bold text-center">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <div
    // id='about'
    >
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "", 0.2, 1)}
        className="mt-4 text-secondary max-w-3xl leading-6"
      >
        I am a passionate developer with a strong foundation in both back-end
        and front-end technologies. I have dedicated myself to mastering Java
        and Spring for back-end development, as well as HTML, CSS, JavaScript
        and react for front-end development. My learning journey has equipped me
        with the skills necessary to build robust and scalable web applications.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-10 items-center justify-evenly rounded-[20px]">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
