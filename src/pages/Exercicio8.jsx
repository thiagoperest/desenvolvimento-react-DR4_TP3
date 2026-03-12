import BotaoVoltar from '../components/BotaoVoltar'
import FormularioSenha from '../components/FormularioSenha'
import './Exercicio8.css'

export default function Exercicio8() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 8</span>
        <h1>Validação Simples</h1>
        <FormularioSenha />
      </div>
    </div>
  )
}
