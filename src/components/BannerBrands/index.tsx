import React from "react"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/partials/brands.scss'

export const BannerBrands = () => {

  return <>
      <div className="container__brands">
      <h2 className="brands__title">Marcas Pareceiras</h2>
      <Swiper
        className="slider__brands"
        spaceBetween={15}
        slidesPerView={"auto"}
        breakpoints={{
          1024: {
            slidesPerView: 5
          }
        }}
        observer={true}
      >
        <SwiperSlide>
          <a href="/" className="item__wrapper">
            <img src="/imgs/brand-01.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="item__wrapper">
            <img src="/imgs/brand-02.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="item__wrapper">
            <img src="/imgs/brand-03.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="item__wrapper">
            <img src="/imgs/brand-04.png" />
          
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="item__wrapper">
            <img src="/imgs/brand-05.png" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </>
}