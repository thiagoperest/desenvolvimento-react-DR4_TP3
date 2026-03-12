import BotaoVoltar from '../components/BotaoVoltar'
import PerfilUsuario from '../components/PerfilUsuario'
import './Exercicio10.css'

export default function Exercicio10() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="exercicio-card">
        <span className="exercicio-label">Exercício 10</span>
        <h1>Formulário com Múltiplos Tipos</h1>
        <PerfilUsuario />
      </div>
    </div>
  )
}
