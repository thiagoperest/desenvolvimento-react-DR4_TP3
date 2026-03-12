import { useState } from 'react'
import './PerfilUsuario.css'

const estadoInicial = {
  nome: '',
  idade: '',
  newsletter: false,
  nivel: '',
  biografia: ''
}

export default function PerfilUsuario() {
  const [form, setForm] = useState(estadoInicial)
  const [perfil, setPerfil] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setPerfil(form)
  }

  return (
    <div className="perfil-container">
      <input
        className="perfil-input"
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />
      <input
        className="perfil-input"
        type="number"
        name="idade"
        placeholder="Idade"
        value={form.idade}
        onChange={handleChange}
      />
      <select
        className="perfil-select"
        name="nivel"
        value={form.nivel}
        onChange={handleChange}
      >
        <option value="">Selecione o nível...</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <textarea
        className="perfil-textarea"
        name="biografia"
        placeholder="Biografia"
        value={form.biografia}
        onChange={handleChange}
      />
      <label className="perfil-label-checkbox">
        <input
          type="checkbox"
          name="newsletter"
          checked={form.newsletter}
          onChange={handleChange}
        />
        Receber newsletter
      </label>
      <button className="perfil-btn" onClick={handleSubmit}>
        Salvar Perfil
      </button>
      {perfil && (
        <div className="perfil-preview">
          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>Idade:</strong> {perfil.idade}</p>
          <p><strong>Nível:</strong> {perfil.nivel}</p>
          <p><strong>Biografia:</strong> {perfil.biografia}</p>
          <p><strong>Newsletter:</strong> {perfil.newsletter ? 'Sim' : 'Não'}</p>
        </div>
      )}
    </div>
  )
}
