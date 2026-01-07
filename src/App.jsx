import './App.css'
import { Header } from './components/header/Header.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pickup, Car, Contact, Financing, Welcome, Product } from './components/main/'
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className='principal-page'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path={"/productos/autos"} element={<Car />} />
            <Route path={"/productos/camionetas"} element={<Pickup />} />
            <Route path="/planes" element={<Financing />} />
            <Route path="/nosotros" element={<Contact />} />
            <Route path='/productos/autos/:carId' element={<Product/>} />
            <Route path='/productos/camionetas/:carId' element={<Product/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
