import './index.css';
import trailerVideo from '../video/TANGLED_Original_Movie_Trailer_Official_Disney_UK_1080P.mp4';

function Home({ setPagina }) {
    return (
        <div className="home">
            <p className="home-subtitle">A aventura de Rapunzel fora da torre</p>

            <video
                src={trailerVideo}
                controls
                autoPlay
                muted
                loop
                style={{ width: '100%', maxWidth: '720px', borderRadius: '12px', margin: '1rem 0' }}
            ></video>

            <div className="home-content">
                <p className="home-description">
                    Bem-vindo à página do filme Enrolados! Explore a história da princesa Rapunzel,
                    seus personagens icônicos e curiosidades fascinantes.
                </p>

                <div className="movie-info">
                    <div className="info-item">
                        <strong>Ano</strong>
                        <span>2010</span>
                    </div>

                    <div className="info-item">
                        <strong>Diretor</strong>
                        <span>Nathan Greno, Byron Howard</span>
                    </div>

                    <div className="info-item">
                        <strong>Gênero</strong>
                        <span>Animação, Aventura, Família</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home