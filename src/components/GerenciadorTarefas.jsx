import { useState } from 'react'
import './GerenciadorTarefas.css'

export default function GerenciadorTarefas() {
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('Baixa')
  const [filtro, setFiltro] = useState('Todas')
  const [tarefas, setTarefas] = useState([])

  function handleAdicionar() {
    if (!descricao.trim()) return
    setTarefas([...tarefas, { id: Date.now(), descricao, prioridade }])
    setDescricao('')
    setPrioridade('Baixa')
  }

  function handleRemover(id) {
    setTarefas(tarefas.filter((t) => t.id !== id))
  }

  const tarefasFiltradas = filtro === 'Todas'
    ? tarefas
    : tarefas.filter((t) => t.prioridade === filtro)

  return (
    <div className="tarefas-container">

      <div className="tarefas-form">
        <label className="tarefas-label">Nova Tarefa</label>
        <input
          className="tarefas-input"
          type="text"
          placeholder="Descrição da tarefa..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <label className="tarefas-label">Prioridade</label>
        <select
          className="tarefas-select"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
        <button className="tarefas-btn-adicionar" onClick={handleAdicionar}>
          Adicionar
        </button>
      </div>

      <div className="tarefas-filtro">
        <label className="tarefas-label">Filtrar por Prioridade</label>
        <select
          className="tarefas-select"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <ul className="tarefas-lista">
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id} className={`tarefas-item prioridade-${tarefa.prioridade.toLowerCase()}`}>
            <span>{tarefa.descricao} - Prioridade: {tarefa.prioridade}</span>
            <button className="tarefas-btn-remover" onClick={() => handleRemover(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}
