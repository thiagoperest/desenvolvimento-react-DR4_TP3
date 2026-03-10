import BotaoVoltar from '../components/BotaoVoltar'
import Comentario from '../components/Comentario'
import './Exercicio3.css'

export default function Exercicio3() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 3</span>
        <h1>Textarea Controlado</h1>
        <Comentario />
      </div>
    </div>
  )
}
