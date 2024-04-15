import React, { useEffect, useRef, useState } from "react"
import '../../styles/partials/header.scss'
export const HeaderMobile = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const headerRef = useRef<any>(null);

  const handleScroll = () => {
    if (!headerRef?.current) {
      return
    }

    if (headerRef?.current?.getBoundingClientRect().top <= 0 && window.scrollY > 0) {
      return setIsOnTop(false);
    }

    return setIsOnTop(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <>
      <div className="header-notice__wrapper">
        <p className="header-notice__text">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>
      <div ref={headerRef} className={`header-main__wrapper ${isOnTop ? '' : 'fixed-top'}`}>
        <nav className="header-menu__wrapper">
          <button className="header-menu__button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Menu Icon</title>
              <desc>Hamburger icon</desc>
              <path d="M23.0625 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H23.0625C23.5803 12.9375 24 12.5178 24 12C24 11.4822 23.5803 11.0625 23.0625 11.0625Z" fill="black" />
              <path d="M23.0625 3.5625H0.9375C0.419719 3.5625 0 3.98222 0 4.5C0 5.01778 0.419719 5.4375 0.9375 5.4375H23.0625C23.5803 5.4375 24 5.01778 24 4.5C24 3.98222 23.5803 3.5625 23.0625 3.5625Z" fill="black" />
              <path d="M23.0625 18.5625H0.9375C0.419719 18.5625 0 18.9822 0 19.5C0 20.0178 0.419719 20.4375 0.9375 20.4375H23.0625C23.5803 20.4375 24 20.0178 24 19.5C24 18.9822 23.5803 18.5625 23.0625 18.5625Z" fill="black" />
            </svg>
          </button>
        </nav>
        <a className="logo__link" href="/">
          <img src="/imgs/logo-maeztra.png" width={110} height={12} className="logo__image" />
        </a>
        <button className="search__button">
          <svg className="search__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8535 22.4395L16.8817 15.4677C18.204 13.8351 19 11.7597 19 9.50004C19 4.26175 14.7383 0 9.49999 0C4.2617 0 0 4.26175 0 9.50004C0 14.7383 4.26175 19.0001 9.50004 19.0001C11.7597 19.0001 13.8351 18.204 15.4677 16.8817L22.4395 23.8536C22.6348 24.0488 22.9513 24.0488 23.1467 23.8536L23.8536 23.1466C24.0488 22.9513 24.0488 22.6347 23.8535 22.4395ZM9.50004 17.0001C5.3643 17.0001 2.00002 13.6358 2.00002 9.50004C2.00002 5.3643 5.3643 2.00002 9.50004 2.00002C13.6358 2.00002 17.0001 5.3643 17.0001 9.50004C17.0001 13.6358 13.6358 17.0001 9.50004 17.0001Z" fill="black" />
          </svg>
        </button>
        <button className="minicart__button"><svg className="minicart__icon" width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7682 23.2112L18.9441 5.84052C18.9059 5.47687 18.5993 5.20074 18.2337 5.20074H14.8052V4.41907C14.8052 1.98248 12.8227 0 10.3861 0C7.94937 0 5.96689 1.98248 5.96689 4.41907V5.20074H2.53842C2.17276 5.20074 1.86624 5.47687 1.82797 5.84052L0.00387816 23.2112C-0.017179 23.4124 0.0481897 23.6133 0.183505 23.7638C0.319003 23.9141 0.511996 24 0.714327 24H20.0576C20.2601 24 20.4531 23.9141 20.5884 23.7638C20.7241 23.6133 20.7893 23.4124 20.7682 23.2112ZM7.39548 4.41907C7.39548 2.7702 8.73709 1.42859 10.3861 1.42859C12.035 1.42859 13.3766 2.7702 13.3766 4.41907V5.20074H7.39548V4.41907ZM1.50754 22.5714L3.18167 6.62933H5.96689V8.20349C5.96689 8.5979 6.28678 8.91779 6.68119 8.91779C7.07559 8.91779 7.39548 8.5979 7.39548 8.20349V6.62933H13.3766V8.20349C13.3766 8.5979 13.6965 8.91779 14.0909 8.91779C14.4853 8.91779 14.8052 8.5979 14.8052 8.20349V6.62933H17.5904L19.2646 22.5714H1.50754Z" fill="black" />
        </svg>
        </button>
      </div>
    </>

  )
}