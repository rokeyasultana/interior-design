import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Choosing from './components/Choosing/Choosing'
import Ideas from './components/Ideas/Ideas'
import Products from './components/Products/Products'
import Room from './components/Room/Room'
import AboutServices from './components/AboutServices/AboutServices'

function App () {
  return (
    <>
      <Navbar />
      <Banner />
      <Choosing />
      <Ideas />
      <Products />
      <AboutServices />
      <Room />
      <Footer />
    </>
  )
}

export default App
