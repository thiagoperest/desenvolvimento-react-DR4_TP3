import BotaoVoltar from '../components/BotaoVoltar'
import SelecionarCidade from '../components/SelecionarCidade'
import './Exercicio4.css'

export default function Exercicio4() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 4</span>
        <h1>Select Controlado</h1>
        <SelecionarCidade />
      </div>
    </div>
  )
}
