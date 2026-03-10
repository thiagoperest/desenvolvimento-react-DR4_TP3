import { useState } from 'react'
import './TermosServico.css'

export default function TermosServico() {
  const [aceito, setAceito] = useState(false)

  return (
    <div className="termos-container">
      <label className="termos-label">
        <input
          type="checkbox"
          checked={aceito}
          onChange={(e) => setAceito(e.target.checked)}
        />
        Aceito os termos de serviço
      </label>
      <p className={`termos-status ${aceito ? 'aceito' : 'nao-aceito'}`}>
        {aceito ? 'Você ACEITOU os termos' : 'Você NÃO aceitou os termos'}
      </p>
    </div>
  )
}
