import { useState } from 'react'
import './FormularioContato.css'

export default function FormularioContato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="contato-container">
      <input
        className="contato-input"
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />
      <input
        className="contato-input"
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="contato-input"
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
      />
      <div className="contato-preview">
        <p><strong>Nome:</strong> {form.nome}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Telefone:</strong> {form.telefone}</p>
      </div>
    </div>
  )
}
