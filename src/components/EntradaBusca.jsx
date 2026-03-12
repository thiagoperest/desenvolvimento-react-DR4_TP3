import './EntradaBusca.css'

export default function EntradaBusca({ valor, onChange }) {
  return (
    <input
      className="entrada-busca-input"
      type="text"
      placeholder="Digite sua busca..."
      value={valor}
      onChange={onChange}
    />
  )
}
