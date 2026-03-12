import BotaoVoltar from '../components/BotaoVoltar'
import CadastroUsuario from '../components/CadastroUsuario'
import './Exercicio12.css'

export default function Exercicio12() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 12</span>
        <h1>Formulário de Cadastro com Validação</h1>
        <CadastroUsuario />
      </div>
    </div>
  )
}
