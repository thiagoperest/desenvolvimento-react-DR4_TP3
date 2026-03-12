import BotaoVoltar from '../components/BotaoVoltar'
import PesquisaRapida from '../components/PesquisaRapida'
import './Exercicio6.css'

export default function Exercicio6() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 6</span>
        <h1>Input Não Controlado com Ref</h1>
        <PesquisaRapida />
      </div>
    </div>
  )
}
