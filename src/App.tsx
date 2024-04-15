
import { BannerBrands } from './components/BannerBrands'
import { BannerMain } from './components/BannerMain'
import { Deals } from './components/Deals'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InfoCard } from './components/InfoCard'
import { Modal } from './components/Modal'
import { Shelf } from './components/Shelf'
import './styles/general.scss'

function App() {

  return (
    <>
      <Header/>
      <main>
        <BannerMain/>
        <Deals/>
        <BannerBrands/>
        <Shelf/>
        <InfoCard/>
        <Modal/>
      </main>
      <Footer/>
    </>
  )
}

export default App
