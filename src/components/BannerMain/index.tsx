import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/partials/banner-main.scss'
export const BannerMain = () => {

  return <>
    <Swiper
      className="slider__main"
      modules={[Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={"auto"}
      navigation={true}
      pagination={{ clickable: true }}
      observer={true}
    >
      <SwiperSlide>
        <div className="item__wrapper">
          <picture>
            <source srcSet="/imgs/main-banner-desktop.png" media="(min-width: 1024px)" />
            <img src="/imgs/main-banner-mobile.png" className="item__image" />
          </picture>
          <div className="item__content">
            <h2 className="item__title">
              Promoções de Outono
            </h2>
            <p className="item__text">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a className="item__button" href="/">
              Conferir
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item__wrapper">
          <picture>
            <source srcSet="/imgs/main-banner-desktop.png" media="(min-width: 1024px)" />
            <img src="/imgs/main-banner-mobile.png" className="item__image" />
          </picture>
          <div className="item__content">
            <h2 className="item__title">
              Promoções de Outono
            </h2>
            <p className="item__text">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a className="item__button" href="/">
              Conferir
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item__wrapper">
          <picture>
            <source srcSet="/imgs/main-banner-desktop.png" media="(min-width: 1024px)" />
            <img src="/imgs/main-banner-mobile.png" className="item__image" />
          </picture>
          <div className="item__content">
            <h2 className="item__title">
              Promoções de Outono
            </h2>
            <p className="item__text">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a className="item__button" href="/">
              Conferir
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
}