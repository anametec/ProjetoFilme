import './index.css'
import posterImg from '../img/poster.jpg';

function Informacoes() {
  return (
    <div className="info-filme">

      <img src={posterImg} alt="Poster do Filme" />

      <p className="info-descricao">
        Conheça os principais detalhes sobre o filme Enrolados (Tangled), 
        uma das animações mais marcantes da Disney.
      </p>

      <div className="info-container">

        <div className="info-card">
          <h2>Dados Gerais</h2>
          <p><strong>Título:</strong> Enrolados (Tangled)</p>
          <p><strong>Ano:</strong> 2010</p>
          <p><strong>Duração:</strong> 100 minutos</p>
          <p><strong>Gênero:</strong> Animação, Aventura, Família</p>
        </div>

        <div className="info-card">
          <h2>Produção</h2>
          <p><strong>Diretores:</strong> Nathan Greno, Byron Howard</p>
          <p><strong>Estúdio:</strong> Walt Disney Animation Studios</p>
          <p><strong>Tecnologia:</strong> CGI (animação 3D)</p>
        </div>

        <div className="info-card">
          <h2>Financeiro</h2>
          <p><strong>Orçamento:</strong> ~ US$ 260 milhões</p>
          <p><strong>Bilheteria:</strong> ~ US$ 592 milhões</p>
        </div>

        <div className="info-card">
          <h2>Avaliação</h2>
          <p><strong>IMDb:</strong> 7.7/10</p>
          <p><strong>Rotten Tomatoes:</strong> 89%</p>
          <p><strong>Oscar:</strong> Indicado a Melhor Canção</p>
        </div>

        <div className="info-card">
          <h2>Sinopse</h2>
          <p>
            Rapunzel é uma jovem princesa com cabelos mágicos que passou a vida inteira
            presa em uma torre. Quando conhece Flynn Rider, ela decide fugir e viver
            uma grande aventura para descobrir o mundo e sua verdadeira identidade.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Informacoes