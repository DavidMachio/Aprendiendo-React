
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'


/*funcion */


const App = () => {

  const [hiddenCart, setHiddenCart] = useState(false);

  const toggleCart = () => {
    setHiddenCart(!hiddenCart)
  }

  return (
    <>
      <Header hidden={toggleCart}/>
      <Banner />
      <Gallery change={hiddenCart}/>
      <Footer />
    </>
  )
}

export default App;
