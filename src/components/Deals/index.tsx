import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/partials/deals.scss'
export const Deals = () => {

  return <>
    <div className="container__deals">
      <h1 className="deals__title">Por que comprar na Maeztra?</h1>
      <Swiper
        className="slider__deals"
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
          <div className="item__wrapper">
            <img src="/icons/deals-01.png" />
            <div className="item__content">
              <span className="item__title">
                Produtos importados
              </span>
              <p className="item__text">
                Produto de Alta Qualidade
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item__wrapper">
            <img src="/icons/deals-02.png" />
            <div className="item__content">
              <span className="item__title">
                Estoque no Brazil
              </span>
              <p className="item__text">
                Produtos mais perto de você
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item__wrapper">
            <img src="/icons/deals-03.png" />
            <div className="item__content">
              <span className="item__title">
                Trocas Garantidas
              </span>
              <p className="item__text">
                Trocas em até 48 horas, vejas as regras
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item__wrapper">
            <img src="/icons/deals-04.png" />
            <div className="item__content">
              <span className="item__title">
                Ganhe 5% off
              </span>
              <p className="item__text">
                Pagando à vista no Cartão
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item__wrapper">
            <img src="/icons/deals-05.png" />
            <div className="item__content">
              <span className="item__title">
                Frete Grátis
              </span>
              <p className="item__text">
                Em compras acima de R$ 499,00
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  </>
}