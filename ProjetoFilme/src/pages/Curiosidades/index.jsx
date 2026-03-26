import './index.css'
import curiosidadeImg from '../img/curiosidade.jpg';
import cabeloImg from '../img/cabelo.jpg';
import doarImg from '../img/doar.jpg';
import florImg from '../img/flor.jpg';
import riderImg from '../img/rider.jpg';
import musicaImg from '../img/musica.jpg';

function Curiosidades(){
    return(
        <div className="curiosidades">
            <p className="curiosidades-description">
                Conheça curiosidades sobre o filme Enrolados
            </p>

            <div className="curiosidades-container">

                <div className="card">
                    <img src={cabeloImg} alt='Cabelo de Rapunzel' />
                    <h2>Cabelo da Rapunzel</h2>
                    <p>
                        Rapunzel tem mais de 21 metros de cabelo! A Disney precisou criar
                        uma tecnologia nova só pra animar os fios.
                    </p>
                </div>

                <div className="card">
                    <img src={doarImg} alt='Doação de cabelo' />
                    <h2>Doação de cabelo</h2>
                    <p>
                        Durante a produção, mulheres da equipe deixaram o cabelo crescer
                        e depois doaram para instituições que fazem perucas.
                    </p>
                </div>

                <div className="card">
                    <img src={florImg} alt='Flor' />
                    <h2>50ª animação</h2>
                    <p>
                        Enrolados foi a 50ª animação da Disney, marcando um momento
                        importante na história do estúdio.
                    </p>
                </div>

                <div className="card">
                    <img src={riderImg} alt='Flynn Rider' />
                    <h2>Nome do Flynn</h2>
                    <p>
                        O nome Flynn Rider foi inspirado no ator Errol Flynn,
                        famoso por interpretar personagens aventureiros.
                    </p>
                </div>

                <div className="card">
                    <img src={musicaImg} alt='Música' />
                    <h2>Trilha sonora</h2>
                    <p>
                        A música “I See The Light” foi indicada ao Oscar de
                        Melhor Canção Original.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Curiosidades