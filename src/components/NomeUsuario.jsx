import { useState } from 'react'
import './NomeUsuario.css'

export default function NomeUsuario() {
  const [nome, setNome] = useState('')

  return (
    <div className="nome-usuario-container">
      <input
        type="text"
        className="nome-input"
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p className="nome-display">Seu nome é: <strong>{nome}</strong></p>
    </div>
  )
}
