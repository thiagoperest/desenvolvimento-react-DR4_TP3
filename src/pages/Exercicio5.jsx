import BotaoVoltar from '../components/BotaoVoltar'
import Login from '../components/Login'
import './Exercicio5.css'

export default function Exercicio5() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 5</span>
        <h1>Formulário de Login</h1>
        <Login />
      </div>
    </div>
  )
}
