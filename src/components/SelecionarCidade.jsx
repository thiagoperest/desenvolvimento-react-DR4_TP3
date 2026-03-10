import { useState } from 'react'
import './SelecionarCidade.css'

export default function SelecionarCidade() {
  const [cidade, setCidade] = useState('')

  return (
    <div className="cidade-container">
      <select
        className="cidade-select"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      >
        <option value="">Selecione uma cidade...</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
      </select>
      <p className="cidade-display">Cidade selecionada: <strong>{cidade}</strong></p>
    </div>
  )
}
