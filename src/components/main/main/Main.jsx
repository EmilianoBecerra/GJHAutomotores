import { Route, Routes } from "react-router-dom"
import "./Main.css"
import { Welcome } from "../welcome/Welcome"
import { Autos } from "../Autos/Autos"

export function Main() {
    return (
        <main>
            <Routes>
                <Route path="/GHAutomotores" element={<Welcome/>}/>
                <Route path="/GHAutomotores/autos" element={<Autos/>} />
            </Routes>
        </main>

    )
}