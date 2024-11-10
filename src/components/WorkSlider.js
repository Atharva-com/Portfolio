// data
import thumb1 from '../../public/thumb1.png'
import thumb2 from '../../public/thumb2.jpg'
import thumb5 from '../../public/JN Tours.png'

export const workSlides = {
  slides: [

    {
      images: [
        {
          title: 'Zorway',
          link: 'https://zorway.in/',
          path: thumb1,
        },
        {
          title: 'JN Tours & Travels',
          link: 'https://tours-travels.vercel.app/',
          path: thumb5,
        },
      ],
    },

    {
      images: [
        {
          title: 'Upcube',
          link: 'https://upcube.io/',
          path: thumb2,
        }
      ]
    },

  ],
};
import { BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return <Swiper
    spaceBetween={10}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[230px] sm:h-[280px] lg:h-[315px]'
    style={{padding: '3rem 0rem'}}
  >

    {workSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>

          <div className='grid grid-cols-2 sm:grid-rows-2 gap-6 cursor-pointer'>

            {slide.images.map((image, index) => {
              return (
                <Link href={image.link} target="_blank"  key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>

                  {/* Image */}
                  <div className='flex items-center justify-center relative overflow-hidden'>
                    
                    <Image src={image.path} width={500} height={300} alt='' />

                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 transition-all duration-700'></div>
                  </div>

                  {/* title */}
                  <div className='flex flex-col absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-16 transition-all duration-300'>

                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>

                      <div className='delay-100'>Live</div>

                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>

                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200
                      '><BsArrowRight /></div>

                    </div>

                    <div className='translate-y-[500%] group-hover:translate-y-1 transition-all duration-300 delay-250'>{image.title}</div>

                  </div>
                  
                </Link>
              )
            })}
            
          </div>

        </SwiperSlide>
      )
    })}

  </Swiper>;
};

export default WorkSlider;
