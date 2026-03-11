import { useRef, useState } from 'react'
import './PesquisaRapida.css'

export default function PesquisaRapida() {
  const inputRef = useRef(null)
  const [resultado, setResultado] = useState('')

  function handlePesquisar() {
    setResultado(inputRef.current.value)
  }

  return (
    <div className="pesquisa-container">
      <input
        className="pesquisa-input"
        type="text"
        ref={inputRef}
        placeholder="Digite sua pesquisa..."
      />
      <button className="pesquisa-btn" onClick={handlePesquisar}>
        Pesquisar
      </button>
      {resultado && (
        <p className="pesquisa-resultado">Você pesquisou: <strong>{resultado}</strong></p>
      )}
    </div>
  )
}
