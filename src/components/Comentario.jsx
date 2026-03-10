import { useState } from 'react'
import './Comentario.css'

export default function Comentario() {
  const [comentario, setComentario] = useState('')

  return (
    <div className="comentario-container">
      <textarea
        className="comentario-textarea"
        placeholder="Digite seu comentário..."
        value={comentario}
        maxLength={140}
        onChange={(e) => setComentario(e.target.value)}
      />
      <p className={`comentario-contador ${comentario.length === 140 ? 'limite' : ''}`}>
        Caracteres: {comentario.length}
      </p>
    </div>
  )
}
