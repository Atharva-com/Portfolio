"use client"

import Image from 'next/image'
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from '../../variants';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';
import ParticlesContainer from '@/components/ParticlesContainer';

export default function Home() {
  return (
    <motion.main variants={fadeIn('down', 0)} initial='hidden' animate='show' exit='hidden' className='bg-primary/60 h-full'>
      
      {/* Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>

        <div className='text-center flex flex-col justify-center xl:pt-48 sm:pt-0 pt-20 xl:text-left h-full container mx-auto'>

          {/* Title */}
          <motion.h1 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-2 font-semibold sm:text-[53px] text-[33px] leading-[3rem] sm:leading-[4.25rem]'>
            Transforming Ideas <br /> Into 
            <span className='text-accent'> Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.5)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-16'>
            Hi there I&apos;m self motivated web developer looking ahead to help you out with your application and building functional and beautiful websites from scratch.
          </motion.p>

          {/* Button */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>

          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>

        </div>

      </div>

      {/* Image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* Bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>

        {/* particles */}
        <ParticlesContainer />

        {/* avatar img */}
        <motion.div variants={fadeIn('up', 0.5)} transition={{duration: 1, ease: 'easeInOut'}} initial='hidden' animate='show' exit='hidden' className='w-full h-full max-w-[563px] max-h-[518px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>

      </div>
    </motion.main>
  )
}
