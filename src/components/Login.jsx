import { useState } from 'react'
import './Login.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Email: ${form.email}\nSenha: ${form.senha}`)
  }

  return (
    <div className="login-container" onSubmit={handleSubmit}>
      <input
        className="login-input"
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="login-input"
        type="password"
        name="senha"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
      />
      <button className="login-btn" onClick={handleSubmit}>Entrar</button>
    </div>
  )
}
