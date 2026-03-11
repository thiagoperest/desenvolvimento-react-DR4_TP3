import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const exercicios = [
    {
      id: 1,
      titulo: 'Input Controlado Básico',
      descricao: 'Input controlado exibindo o valor em tempo real',
      rota: '/exercicio-1'
    },
    {
      id: 2,
      titulo: 'Checkbox Controlado',
      descricao: 'Checkbox controlado que altera o texto de status',
      rota: '/exercicio-2'
    },
    {
      id: 3,
      titulo: 'Textarea Controlado',
      descricao: 'Textarea controlado com contador de caracteres',
      rota: '/exercicio-3'
    },
    {
      id: 4,
      titulo: 'Select Controlado',
      descricao: 'Dropdown controlado exibindo a cidade selecionada',
      rota: '/exercicio-4'
    },
    {
      id: 5,
      titulo: 'Formulário de Login',
      descricao: 'Formulário com email e senha que exibe os dados ao enviar',
      rota: '/exercicio-5'
    },
    {
      id: 6,
      titulo: 'Input Não Controlado com Ref',
      descricao: 'Input não controlado que exibe o valor ao clicar em pesquisar',
      rota: '/exercicio-6'
    }
  ]

  return (
    <div className="home-container">
      <h1>Desenvolvimento Web com React</h1>
      <p className="subtitle">TP3</p>

      <div className="exercicios-grid">
        {exercicios.map((exercicio) => (
          <Link to={exercicio.rota} key={exercicio.id} className="exercicio-card">
            <h2>Exercício {exercicio.id}</h2>
            <h3>{exercicio.titulo}</h3>
            <p>{exercicio.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
