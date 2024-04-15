import React from "react";
import { FooterMenuMobile } from "./mobile";
import { Newsletter } from "./newsletter";
import '../../styles/partials/footer.scss'
import { FooterBottom } from "./footerBottom";
const footerLinks: FooterLinks[] = [
	{
    title: "Informações",
    links: [
      {
        title:"Quem Somos",
        url: '#'
      },
      {
        title:"Prazo de Envio",
        url: '#'
      },
      {
        title:"Trocas e Devoluções",
        url: '#'
      },
      {
        title:"Promoções e Cupons",
        url: '#'
      }
    ]
  },
  {
    title: "Minha Conta",
    links: [
      {
        title:"Minha Conta",
        url: '#'
      },
      {
        title:"Meus Pedidos",
        url: '#'
      },
      {
        title:"Cadastre-se",
        url: '#'
      },
    ]
  },
  {
    title: "Onde nos Encontrar",
    links: [
      {
        title:"Lojas",
        url: '#'
      },
      {
        title:"Endereço",
        url: '#'
      },
  
    ]
  }
]

export const Footer = () => {

  return <footer>

    <Newsletter />
    <FooterMenuMobile links={footerLinks} />
    <FooterBottom/>
  </footer>
}