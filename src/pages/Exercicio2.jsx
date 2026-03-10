import BotaoVoltar from '../components/BotaoVoltar'
import TermosServico from '../components/TermosServico'
import './Exercicio2.css'

export default function Exercicio2() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 2</span>
        <h1>Checkbox Controlado</h1>
        <TermosServico />
      </div>
    </div>
  )
}
