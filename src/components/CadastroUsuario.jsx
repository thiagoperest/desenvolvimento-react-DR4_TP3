import { useState } from 'react'
import ResumoCadastro from './ResumoCadastro'
import './CadastroUsuario.css'

const estadoInicial = {
  nome: '',
  email: '',
  senha: '',
  confirmar: '',
  tipoConta: 'Pessoa Física',
  termos: false
}

export default function CadastroUsuario() {
  const [form, setForm] = useState(estadoInicial)
  const [resumo, setResumo] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const erros = {
    nome: form.nome && form.nome.length < 3 ? 'Mínimo de 3 caracteres' : '',
    email: form.email && !form.email.includes('@') ? 'Email inválido' : '',
    senha: form.senha && form.senha.length < 6 ? 'Mínimo de 6 caracteres' : '',
    confirmar: form.confirmar && form.confirmar !== form.senha ? 'Senhas não coincidem' : ''
  }

  const formularioValido =
    form.nome.length >= 3 &&
    form.email.includes('@') &&
    form.senha.length >= 6 &&
    form.confirmar === form.senha &&
    form.termos

  function handleSubmit(e) {
    e.preventDefault()
    setResumo(form)
    setForm(estadoInicial)
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">

        <div className="cadastro-campo">
          <label className="cadastro-label">Nome Completo</label>
          <input
            className={`cadastro-input ${erros.nome ? 'input-erro' : ''}`}
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="cadastro-erro">{erros.nome}</span>}
        </div>

        <div className="cadastro-campo">
          <label className="cadastro-label">Email</label>
          <input
            className={`cadastro-input ${erros.email ? 'input-erro' : ''}`}
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
          />
          {erros.email && <span className="cadastro-erro">{erros.email}</span>}
        </div>

        <div className="cadastro-campo">
          <label className="cadastro-label">Senha</label>
          <input
            className={`cadastro-input ${erros.senha ? 'input-erro' : ''}`}
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
          />
          {erros.senha && <span className="cadastro-erro">{erros.senha}</span>}
        </div>

        <div className="cadastro-campo">
          <label className="cadastro-label">Confirmar Senha</label>
          <input
            className={`cadastro-input ${erros.confirmar ? 'input-erro' : ''}`}
            type="password"
            name="confirmar"
            placeholder="Confirmar senha"
            value={form.confirmar}
            onChange={handleChange}
          />
          {erros.confirmar && <span className="cadastro-erro">{erros.confirmar}</span>}
        </div>

        <div className="cadastro-campo">
          <label className="cadastro-label">Tipo de Conta</label>
          <div className="cadastro-radio-grupo">
            <label className="cadastro-radio-label">
              <input
                type="radio"
                name="tipoConta"
                value="Pessoa Física"
                checked={form.tipoConta === 'Pessoa Física'}
                onChange={handleChange}
              />
              Pessoa Física
            </label>
            <label className="cadastro-radio-label">
              <input
                type="radio"
                name="tipoConta"
                value="Pessoa Jurídica"
                checked={form.tipoConta === 'Pessoa Jurídica'}
                onChange={handleChange}
              />
              Pessoa Jurídica
            </label>
          </div>
        </div>

        <div className="cadastro-campo">
          <label className="cadastro-checkbox-label">
            <input
              type="checkbox"
              name="termos"
              checked={form.termos}
              onChange={handleChange}
            />
            Aceito os Termos de Uso
          </label>
        </div>

        <button
          className="cadastro-btn"
          disabled={!formularioValido}
          onClick={handleSubmit}
        >
          Cadastrar
        </button>

      </div>

      {resumo && <ResumoCadastro dados={resumo} />}
    </div>
  )
}
