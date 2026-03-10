import BotaoVoltar from '../components/BotaoVoltar'
import NomeUsuario from '../components/NomeUsuario'
import './Exercicio1.css'

export default function Exercicio1() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 1</span>
        <h1>Input Controlado Básico</h1>
        <NomeUsuario />
      </div>
    </div>
  )
}
