import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import './about.css';
import AboutImage from '../assets/about.png';
import Resume from '../assets/Resume.pdf';
import { GoArrowDown } from 'react-icons/go';


const ServiceCard = ({ index, title, icon }) => (

  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in ECMAScript and
        JavaScript, and expertise in frameworks like React.js and Node.js,
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


      <div className="container about__container" >
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>


          <div className='para'>
            <p>
              Bulding projects my clients love have always been my passion
              Being in the web development industry for over 1 year and serving
              more than 70 happy clients worldwide, I'm always motivated to
              more!
            </p>
            <p>
              Hi, my name is Rohit Singh from BIhar. Rohtas. Sasaram I'm full-stack web
              developer with a Bachelors degree in Computer Science Engineering.
              My top priority is to get your business online the right way, giving your
              industry-standard design and all the functionality you need to
              operate smoothly online. Get in touch today with details of your
              project let's get started! Check out resume below!
            </p>
          </div>

          <a href={Resume} download className='btn primary'>Resume<GoArrowDown className="arrow" /></a>

        </div>
      </div>


    </>
  );
};

export default SectionWrapper(About, "about");
