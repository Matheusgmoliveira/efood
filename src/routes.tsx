import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Foods from './pages/Foods'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Products/:id" element={<Products />} />
    <Route path="/Foods/:id" element={<Foods />} />
  </Routes>
)

export default Rotas
