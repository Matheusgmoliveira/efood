import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Products from './pages/Products'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Products" element={<Products />} />
  </Routes>
)
function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
