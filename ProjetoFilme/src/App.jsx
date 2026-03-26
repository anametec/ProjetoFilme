import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Curiosidades from './pages/Curiosidades'
import Informacoes from './pages/Informações'
import { useState } from 'react'

function App() {

  const [pagina, setPagina] = useState('Home')

  const renderizarPagina = () => {
    if (pagina === 'Home') return <Home setPagina={setPagina} />
    if (pagina === 'Personagens') return <Personagens />
    if (pagina === 'Curiosidades') return <Curiosidades />
    if (pagina === 'Informacoes') return <Informacoes />
  }

  return (
    <div className="container">
      <h1>Enrolados</h1>

      <nav>
        <button onClick={() => setPagina('Home')}>Home</button>
        <button onClick={() => setPagina('Personagens')}>Personagens</button>
        <button onClick={() => setPagina('Curiosidades')}>Curiosidades</button>
        <button onClick={() => setPagina('Informacoes')}>Informações</button>
      </nav>

      <div className='conteudo'>
        {renderizarPagina()}
      </div>
    </div>
  )
}

export default App