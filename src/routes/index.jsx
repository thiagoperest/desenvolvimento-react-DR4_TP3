import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Exercicio1 from '../pages/Exercicio1'
import Exercicio2 from '../pages/Exercicio2'
import Exercicio3 from '../pages/Exercicio3'
import Exercicio4 from '../pages/Exercicio4'
import Exercicio5 from '../pages/Exercicio5'
import Exercicio6 from '../pages/Exercicio6'
import Exercicio7 from '../pages/Exercicio7'
import Exercicio8 from '../pages/Exercicio8'
import Exercicio9 from '../pages/Exercicio9'
import Exercicio10 from '../pages/Exercicio10'
import Exercicio11 from '../pages/Exercicio11'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercicio-1" element={<Exercicio1 />} />
      <Route path="/exercicio-2" element={<Exercicio2 />} />
      <Route path="/exercicio-3" element={<Exercicio3 />} />
      <Route path="/exercicio-4" element={<Exercicio4 />} />
      <Route path="/exercicio-5" element={<Exercicio5 />} />
      <Route path="/exercicio-6" element={<Exercicio6 />} />
      <Route path="/exercicio-7" element={<Exercicio7 />} />
      <Route path="/exercicio-8" element={<Exercicio8 />} />
      <Route path="/exercicio-9" element={<Exercicio9 />} />
      <Route path="/exercicio-10" element={<Exercicio10 />} />
      <Route path="/exercicio-11" element={<Exercicio11 />} />
    </Routes>
  )
}
