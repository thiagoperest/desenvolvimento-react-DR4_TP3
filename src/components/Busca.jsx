import { useState } from 'react'
import EntradaBusca from './EntradaBusca'
import ResultadoBusca from './ResultadoBusca'
import './Busca.css'

export default function Busca() {
  const [termo, setTermo] = useState('')

  return (
    <div className="busca-container">
      <EntradaBusca
        valor={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <ResultadoBusca termo={termo} />
    </div>
  )
}
