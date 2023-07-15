"use client"
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from "../../../variants";

const Contact = () => {
  return <div className='h-full bg-primary/30'>

    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>

      <div className='flex flex-col w-full max-w-[700px]'>

        <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent'>connect.</span>
        </motion.h2>

        {/* form */}
        <motion.form 
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex-1 flex flex-col gap-6 w-full mx-auto'>

          <div className='flex gap-x-6 w-full'>

            {/* Name */}
            <div className="relative z-0 w-full group h-[53px]">

            <input type="text" name="name" id="name" className="block px-0 h-full w-full text-lg text-accent bg-transparent border-0 border-b-2 border-[#FFFFFF] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

            <label htmlFor="name" className="peer-focus:font-medium absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

            </div>

            {/* Email */}
            <div className="relative z-0 w-full group h-[53px]">

            <input type="email" name="email" id="email" className="block px-0 h-full w-full text-lg text-accent bg-transparent border-0 border-b-2 border-[#FFFFFF] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

            <label htmlFor="email" className="peer-focus:font-medium absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

            </div>

          </div>

          {/* subject */}
          <div className="relative z-0 w-full group h-[53px]">

            <input type="text" name="subject" id="subject" className="block px-0 h-full w-full text-lg text-accent bg-transparent border-0 border-b-2 border-[#FFFFFF] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

            <label htmlFor="subject" className="peer-focus:font-medium absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>

          </div>

          {/* textarea */}
          <div className="relative z-0 w-full group h-[53px]">

            <textarea type="text" name="subject" id="subject" className="pt-4 block px-0 h-full w-full text-lg text-accent bg-transparent border-0 border-b-2 border-[#FFFFFF] appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

            <label htmlFor="subject" className="peer-focus:font-medium absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>

          </div>

          <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>

            <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>

            <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />

          </button>

        </motion.form>

      </div>

    </div>

  </div>;
};

export default Contact;
