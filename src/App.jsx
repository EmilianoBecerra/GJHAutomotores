import "./App.css"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact, Financing, Welcome, Product } from "./components/main/"
import { globalContext } from "./context/context.jsx"
import { useState } from "react"
import { AllProducts } from "./components/main/products/AllProducts/AllProducts.jsx"

function App() {

  const [buscador, setBuscador] = useState("");

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="principal-page">
        <globalContext.Provider value={{ buscador, setBuscador }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path={"/productos/auto"} element={<AllProducts />} />
              <Route path={"/productos/camioneta"} element={<AllProducts />} />
              <Route path="/planes" element={<Financing />} />
              <Route path="/nosotros" element={<Contact />} />
              <Route path="/productos/auto/:carId" element={<Product />} />
              <Route path="/productos/camioneta/:carId" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </globalContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
