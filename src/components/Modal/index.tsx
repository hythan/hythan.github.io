import { useState } from "react";
import '../../styles/partials/modal.scss'

export const Modal = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <div className="modal__overlay" style={{display: `${openModal? 'flex':'none'}`}}>
        <div className="modal__wrapper">
        <button className="modal__close" onClick={() => setOpenModal(false)}>FECHAR</button>
          <img src="/imgs/modal-image.png" className="modal__image" />
          <div className="modal__content">
            <svg className="modal__icon" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 4.94336H23.3333C24.6167 4.94336 25.6667 6.05563 25.6667 7.41506V22.2453C25.6667 23.6047 24.6167 24.717 23.3333 24.717H4.66667C3.38334 24.717 2.33334 23.6047 2.33334 22.2453V7.41506C2.33334 6.05563 3.38334 4.94336 4.66667 4.94336Z" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.6667 7.41504L14 16.066L2.33334 7.41504" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="modal__wellcome">
              Bem Vindo à MAEZTRA
            </span>
            <p className="modal__text">
              Receba em Primeira mão <br/>
              <strong className="modal__text--highlighted">desconto e ofertas exclusivas</strong>
            </p>
            <form action="" className="modal__form">
              <input type="email" className="modal__input" placeholder="Digite seu e-mail" />
              <button type="button" className="modal__button">
                ENVIAR
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3125 0.664062L1.5625 6.28906C0.742188 6.75781 0.8125 7.95312 1.67969 8.30469L4.375 9.40625V11.375C4.375 12.4766 5.75781 12.9219 6.39062 12.0547L7.42188 10.6719L10.0469 11.75C10.1875 11.8203 10.3281 11.8438 10.4688 11.8438C10.6562 11.8438 10.8438 11.7969 11.0312 11.7031C11.3359 11.5156 11.5234 11.2344 11.5938 10.8828L12.9766 1.8125C13.1172 0.875 12.1094 0.195312 11.3125 0.664062ZM5.5 11.375V9.875L6.34375 10.2266L5.5 11.375ZM10.4688 10.7188L6.85938 9.21875L10.1641 4.48438C10.3984 4.10938 9.92969 3.6875 9.60156 3.99219L4.63281 8.30469L2.125 7.25L11.875 1.625L10.4688 10.7188Z" fill="white" />
                </svg>

              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}