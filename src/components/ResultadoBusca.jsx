import './ResultadoBusca.css'

export default function ResultadoBusca({ termo }) {
  return (
    <p className="resultado-busca">
      Você está buscando: <strong>{termo}</strong>
    </p>
  )
}
