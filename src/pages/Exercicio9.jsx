import BotaoVoltar from '../components/BotaoVoltar'
import Busca from '../components/Busca'
import './Exercicio9.css'

export default function Exercicio9() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 9</span>
        <h1>Elevação de Estado</h1>
        <Busca />
      </div>
    </div>
  )
}
