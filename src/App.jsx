import './App.css'
import { Header } from './components/header/Header.jsx'
import { Footer } from './components/footer/footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './components/main/main/Main.jsx'
function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
