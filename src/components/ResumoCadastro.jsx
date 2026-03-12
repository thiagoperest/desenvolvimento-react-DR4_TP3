import './ResumoCadastro.css'

export default function ResumoCadastro({ dados }) {
  return (
    <div className="resumo-container">
      <h3 className="resumo-titulo">Cadastro Realizado!</h3>
      <div className="resumo-preview">
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>Email:</strong> {dados.email}</p>
        <p><strong>Tipo de Conta:</strong> {dados.tipoConta}</p>
        <p><strong>Termos Aceitos:</strong> {dados.termos ? 'Sim' : 'Não'}</p>
      </div>
    </div>
  )
}
