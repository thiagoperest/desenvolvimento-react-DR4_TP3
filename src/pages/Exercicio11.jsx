import BotaoVoltar from '../components/BotaoVoltar'
import GerenciadorTarefas from '../components/GerenciadorTarefas'
import './Exercicio11.css'

export default function Exercicio11() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 11</span>
        <h1>Lista de Tarefas com Formulário</h1>
        <GerenciadorTarefas />
      </div>
    </div>
  )
}
