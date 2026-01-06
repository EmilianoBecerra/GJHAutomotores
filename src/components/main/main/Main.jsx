import { Route, Routes } from "react-router-dom"
import "./Main.css"
import { Welcome } from "../welcome/Welcome"
import { Autos } from "../products/Autos"
import { Van } from "../products/Van"
import { Financing } from "./financing/Financing"
import { Contact } from "../contact/Contact"

export function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Autos" element={<Autos />} />
                <Route path="/Camionetas" element={<Van />} />
                <Route path="/Planes" element={<Financing />} />
                <Route path="/Nosotros" element={<Contact />} />
            </Routes>
        </main>

    )
}