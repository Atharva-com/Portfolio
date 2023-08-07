// data
import thumb1 from '../../public/thumb1.png'
import thumb2 from '../../public/thumb2.png'
import thumb3 from '../../public/thumb3.png'
import thumb4 from '../../public/thumb4.png'
import thumb5 from '../../public/thumb5.png'
import thumb6 from '../../public/thumb6.png'
import thumb7 from '../../public/thumb7.png'
import thumb8 from '../../public/thumb8.png'
export const workSlides = {
  slides: [

    {
      images: [
        {
          title: 'Zorway',
          link: 'https://zorway-atharva-com.vercel.app/',
          path: thumb1,
        },
        {
          title: 'E-commerce site',
          link: 'https://shree-vastra-com.vercel.app/',
          path: thumb2,
        },
      ],
    },

    {
      images: [
        {
          title: 'Google-clone',
          link: 'https://goole-clone.vercel.app/',
          path: thumb3,
        },
        {
          title: 'The Fit club',
          link: 'https://gymnast-com.vercel.app/',
          path: thumb4,
        },
      ],
    },

    {
      images: [
        {
          title: 'NewsApp',
          link: 'https://newsletter-opal.vercel.app/',
          path: thumb5,
        },
        {
          title: 'Weather App',
          link: 'https://weather-kappa-five.vercel.app/',
          path: thumb6,
        },
      ],
    },

    {
      images: [
        {
          title: 'Todo List',
          link: 'https://todo-list-chi-bay.vercel.app/',
          path: thumb8,
        },
        {
          title: 'Academia',
          link: 'https://academia-xi.vercel.app/',
          path: thumb7,
        },
      ],
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
