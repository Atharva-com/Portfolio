"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants';
import Circles from '@/components/Circles';
import Bulb from '@/components/Bulb';
import WorkSlider from '@/components/WorkSlider';

const Work = () => {
  return <div className='h-full bg-primary/10 py-36 flex items-center'>

    <Circles />

    <div className='container mx-auto'>

      <div className='flex flex-col items-center xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 sm:mt-10 lg:mt-0 xl:mb-0'>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 xl:mt-12'>
            My work <span className='text-accent'>.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Some of my personal projects that shows my skills, dedication and hardwork. I have used different web technologies in different projects like PHP, ReactJs, NextJs, NodeJs, Tailwind etc. .  
            </motion.p>
        </div>

        <motion.div
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]'>
          {/* slider */}
          <WorkSlider />
        </motion.div>

      </div>

    </div>

    <Bulb />

  </div>;
};

export default Work;
