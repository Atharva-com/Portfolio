"use client"
//  data
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
  FaFigma,
  FaBootstrap,
  FaPython,
  FaGithub,
  FaGitAlt
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiVisualstudiocode
} from 'react-icons/si'

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Technologies',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaPhp key={7} />,
        ],
      },
      {
        title: 'Programming Languages',
        icons: [
          <FaJs key={3} />,
          <FaPython key={12} />
        ]
      },
      {
        title: 'Frameworks and Libraries',
        icons: [
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaBootstrap key={8} />,
          <SiTailwindcss key={11} />
        ]
      },
      {
        title: 'Designing',
        icons: [<FaFigma key={10} />, <FaWordpress key={9} />,],
      },
      {
        title: 'Tools',
        icons: [
          <SiVisualstudiocode key={14} />,
          <FaGithub key={13} />,
          <FaGitAlt key={14} />
        ]
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'React Developer - ',
        school: 'Zorway',
        stage: '2023',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: "Secondary School - ",
        school: "St. Jude's High. Sec. School, Khargone(M.P.)",
        stage: '2019',
      },
      {
        title: 'High School - ',
        school: "Vinay Bal Mandir, Khargone(M.P.)",
        stage: '2019-2021',
      },
      {
        title: "Bachelor's of Technology - ",
        school: "Madhav Institute of Technology And Science, Gwalior(M.P.)",
        stage: '2021-2025',
      },
    ],
  },
];

import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { useState } from 'react';
import CountUp from 'react-countup';
const About = () => {
  const [index, setindex] = useState(0)
  return <motion.div
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='h-full bg-primary/30 sm:pt-40 sm:py-28 md:py-28 lg:py-24 py-[6.5rem] text-center xl:text-left'>

    <Circles />

    {/* avatar img */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>

    <div className='overflow-hidden sm:overflow-visible container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 lg:p-0 px-4'>

      {/* Left */}
      <div className='flex-1 flex flex-col justify-center mt-6 sm:my-0 xl:pl-20'>

        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-1 font-semibold md:text-[52px] md:leading-[1.3] leading-[1.25] text-[26px]'>
          Captivating <span className='text-accent'>stories</span> birth magnificant designs. </motion.h2>

        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0'>I began freelancing as a developer and Designer. I&apos;am done remote work for communities, for startups, and collaborated on digital products for business and consumer use.</motion.p>

        {/* Counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>

          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>

              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={0} duration={5} /> +
              </div>

              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>

            </div>

            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>

              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={0} duration={5} /> +
              </div>

              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>

            </div>

            {/* projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>

              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5} /> +
              </div>

              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>

            </div>

            {/* awards */}
            <div className='relative flex-1'>

              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={0} duration={5} /> +
              </div>

              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Right */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col xl:pl-0 w-full overflow-scroll no-scrollbar relative z-30 lg:justify-start xl:max-w-[48%] h-[480px]'>

        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setindex(itemIndex)}>{item.title}</div>
            )
          })}
        </div>

        <div className='xl:py-6 flex flex-col lg:gap-y-4 gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>

                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='text-white'>{item.school}</div>
                <div className='hidden md:flex'> - </div>
                <div className='text-white'>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIndex) => {
                    return (
                      <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </motion.div>

    </div>

  </motion.div>;
};

export default About;