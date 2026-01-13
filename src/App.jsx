import "./App.css"
import { Header } from "./components/header/Header.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact, Financing, Welcome, Product, AllProducts } from "./components/main/"

function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="principal-page">
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
      </div>
    </BrowserRouter>
  )
}

export default App
