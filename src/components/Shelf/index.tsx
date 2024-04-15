import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/partials/shelf.scss'
import { Navigation } from 'swiper/modules';

const products:Product[] = [
  {
    imageUrl: '/imgs/products/product-01.png',
    name: 'Faux Suede Mini Skirt',
    description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    price: 'R$ 500,00',
    colors: [
      {codeHex: '#DEAC71'},
      {codeHex: '#D37164'},
      {codeHex: '#6497D3'},
      {codeHex: '#3C3B79'}
    ]
  },
  {
    imageUrl: '/imgs/products/product-02.png',
    name: 'Ruched Rose Print Mini Skirt',
    description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    price: 'R$ 320,00',
    colors: [
      {codeHex: '#1C1A19'},
      {codeHex: '#D84E4B'},
      {codeHex: '#CFC9B0'},
      {codeHex: '#EAE9E5'}
    ]
  },
  {
    imageUrl: '/imgs/products/product-01.png',
    name: 'Faux Suede Mini Skirt',
    description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    price: 'R$ 500,00',
    colors: [
      {codeHex: '#DEAC71'},
      {codeHex: '#D37164'},
      {codeHex: '#6497D3'},
      {codeHex: '#3C3B79'}
    ]
  },
  {
    imageUrl: '/imgs/products/product-02.png',
    name: 'Ruched Rose Print Mini Skirt',
    description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    price: 'R$ 320,00',
    colors: [
      {codeHex: '#1C1A19'},
      {codeHex: '#D84E4B'},
      {codeHex: '#CFC9B0'},
      {codeHex: '#EAE9E5'}
    ]
  },
  {
    imageUrl: '/imgs/products/product-01.png',
    name: 'Faux Suede Mini Skirt',
    description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    price: 'R$ 500,00',
    colors: [
      {codeHex: '#DEAC71'},
      {codeHex: '#D37164'},
      {codeHex: '#6497D3'},
      {codeHex: '#3C3B79'}
    ]
  },
  {
    imageUrl: '/imgs/products/product-02.png',
    name: 'Ruched Rose Print Mini Skirt',
    description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    price: 'R$ 320,00',
    colors: [
      {codeHex: '#1C1A19'},
      {codeHex: '#D84E4B'},
      {codeHex: '#CFC9B0'},
      {codeHex: '#EAE9E5'}
    ]
  }
]

export const Shelf = () => {
  const [selectedSku, setSelectedSku] = useState(0);

  return <>
      <div className="container__products">
      <h2 className="shelf__title">As Mais Pedidas</h2>
      <Swiper
        className="slider__products"
        spaceBetween={14}
        slidesPerView={"auto"}
        loop={true}
        navigation={true} 
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          }
        }}
        observer={true}
        observeParents={true}
      >
        {products?.map((product, index) => {
          return (
            <SwiperSlide key={`${product.name}-${index}`}>
            <div className="shelf__product">
              <a href="/" className="product__link">
                <img className="product__image" src={product.imageUrl}/>
              </a>
              <div className="product__content">
                <div className="product__skus">
                  {product.colors.map((color, index) => (
                    <button key={index} className={`product__sku ${index === selectedSku ? 'selected': ''}`} style={{background: `${color.codeHex}`}} onClick={() => setSelectedSku(index)}></button>
                  ))}
                </div>
                <span className="product__price">
                  {product.price}
                </span>
                <h3 className="product__name">{product.name}</h3>
                <p className="product__description">{product.description}</p>
                <button className="product__add-to-cart">Adicionar</button>
              </div>
            </div>
          </SwiperSlide>
          )

        })}
     
      </Swiper>
    </div>
  </>
}