import { useState } from "react"

interface IProps {
  links: FooterLinks[]
}
export const FooterMenuMobile = ({ links }: any) => {
  const [isActiveIndex, setIsActiveIndex] = useState(-1);
  const handleClick = (index: number) => {
    if(isActiveIndex === index) {
      return  setIsActiveIndex(-1);
    }

    setIsActiveIndex(index)
  }


  return <>
    <div className="footer__menu">
      <ul className="menu__list">
        {links?.map((footerLink: FooterLinks, index: number) => {
          return (
            <li className={`menu__item ${isActiveIndex === index ? 'active':''}`}>
              <h4 className="menu__title" onClick={() => handleClick(index)}>
                {footerLink.title}
                <svg className="menu__icon" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.8 4.944V3.024H3.504V0.335999H5.424V3.024H8.16V4.944H5.424V7.664H3.504V4.944H0.8Z" fill="#353535" />
                </svg>

              </h4>
              <ul className={`menu__sublist ${isActiveIndex === index ? 'active':''}`}>
                {footerLink.links.map((link) => {
                  return <>
                    <li className="sublist__item">
                      <a className="sublist__link" href={link.url}>
                        {link.title}
                      </a>
                    </li>
                  </>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  </>
}