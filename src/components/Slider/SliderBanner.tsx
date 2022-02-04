import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

import Image from 'next/image'
import BannerOne from '../../../public/marvelOne.png'
import BannerTwo from '../../../public/marvelTwo.png'
import BannerThree from '../../../public/marvelThree.png'

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000
      }}
    >
      <SwiperSlide>
        <Image src={BannerOne} alt="BannerOne" height={300} />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={BannerTwo} alt="BannerTwo" height={300} />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={BannerThree} alt="BannerThree" height={300} />
      </SwiperSlide>
    </Swiper>
  )
}
