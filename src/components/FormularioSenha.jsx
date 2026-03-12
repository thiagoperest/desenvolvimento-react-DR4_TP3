import { useState } from 'react'
import './FormularioSenha.css'

export default function FormularioSenha() {
  const [form, setForm] = useState({ senha: '', confirmar: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const senhasIguais = form.senha !== '' && form.senha === form.confirmar

  return (
    <div className="senha-container">
      <input
        className="senha-input"
        type="password"
        name="senha"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
      />
      <input
        className="senha-input"
        type="password"
        name="confirmar"
        placeholder="Confirmar senha"
        value={form.confirmar}
        onChange={handleChange}
      />
      {form.confirmar && (
        <p className={`senha-status ${senhasIguais ? 'coincidem' : 'diferentes'}`}>
          {senhasIguais ? 'Senhas coincidem' : 'Senhas diferentes'}
        </p>
      )}
      <button
        className="senha-btn"
        disabled={!senhasIguais}
        onClick={() => alert('Cadastro realizado com sucesso!')}
      >
        Cadastrar
      </button>
    </div>
  )
}
