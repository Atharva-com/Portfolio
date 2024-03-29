// data
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx'
import {FaTowerBroadcast} from 'react-icons/fa6'
import {SiMarketo} from 'react-icons/si'
export const serviceData = [
  // {
  //   icon: <RxCrop />,
  //   title: 'Branding',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur',
  // },
  {
    icon: <RxDesktop />,
    title: 'Website Development',
    description: "PHP Development, ReactJs Development, NodeJs Development",
  },
  {
    icon: <RxPencil2 />,
    title: 'Page Designing',
    description: 'Figma Designing, Wordpress Designing, Canva Designing',
  },
  // {
  //   icon: <RxReader />,
  //   title: 'Copywriting',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur .',
  // },
  // {
  //   icon: <RxRocket />,
  //   title: 'SEO',
  //   description: "Companies use Search Engine Optimization to increase the amount of visitors to website by obtaining high-ranking.",
  // },
  // {
  //   icon: <FaTowerBroadcast />,
  //   title: 'Affiliate Marketing',
  //   description: 'Social Media Marketing, Facebook Ads, Google Ads, Instagram Ads',
  // },
];
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },

  }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[250px] md:h-[250px]'
  >

    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>

          <div className='bg-[rgba(65, 47, 123, 0.15)] h-max rounded-lg px-6 py-8 w-[350px] sm:w-[230px] flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>

            {/* Title and des */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>

            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      )
    })}

  </Swiper>;
};

export default ServiceSlider;
