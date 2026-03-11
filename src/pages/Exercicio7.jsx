import BotaoVoltar from '../components/BotaoVoltar'
import FormularioContato from '../components/FormularioContato'
import './Exercicio7.css'

export default function Exercicio7() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 7</span>
        <h1>Múltiplos Inputs Controlados</h1>
        <FormularioContato />
      </div>
    </div>
  )
}
