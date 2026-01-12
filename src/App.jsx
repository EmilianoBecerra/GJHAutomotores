import "./App.css"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pickup, Car, Contact, Financing, Welcome, Product } from "./components/main/"
import { Busqueda } from "./components/main/busqueda/Busqueda.jsx"
import { globalContext } from "./context/context.jsx"
import { useEffect, useState } from "react"

function App() {

  const [buscador, setBuscador] = useState("");

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="principal-page">
        <globalContext.Provider value={{buscador, setBuscador}}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path={"/productos/autos"} element={<Car />} />
              <Route path={"/productos/camionetas"} element={<Pickup />} />
              <Route path="/planes" element={<Financing />} />
              <Route path="/nosotros" element={<Contact />} />
              <Route path="/productos/autos/:carId" element={<Product />} />
              <Route path="/productos/camionetas/:carId" element={<Product />} />
              <Route path="/buscador" element={<Busqueda />} />
            </Routes>
          </main>
          <Footer />
        </globalContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
