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
            <h1>Curiosidades</h1>
            <img src={curiosidadeImg} alt='Curiosidade'></img>
            <p className="curiosidades-description">Conheça curiosidades sobre o filme Enrolados.</p>
            <h2>Tamanho do cabelo de Rapunzel</h2>
            <img src={cabeloImg} alt='Cabelo de Rapunzel'></img>
            <p>A princesa protagonista tem mais de 21 metros de cabelos e mais de 100 mil tranças individuais. Por conta da grandiosidade das madeixas, o estúdio precisou de uma nova tecnologia para simular o movimento dos fios, isso porque, nenhuma personagem havia tido um cabelo tão enorme em outras produções até então. Foi a primeira animação da Disney com CGI.</p>
            <h2>Ação com cabelos</h2>
            <img src={doarImg} alt='Doação de cabelos'></img>
            <p>Segundo conta o Camundongo, ao longo do desenvolvimento do filme, dez mulheres da produção optaram por deixar o cabelo crescer. Ao final desse processo, cada uma delas doou 25 centímetros do comprimento para uma instituição que cria perucas com cabelos humanos para pessoas que perdem os fios devido a doenças.</p>
            <h2>50º Animação</h2>
            <img src={florImg} alt='Flor'></img>
            <p>Além de ser um clássico da Disney, o filme foi uma marca importante para a história do estúdio: Enrolados foi a 50º animação da Walt Disney Pictures.</p>
            <h2>Nome original de Flynn</h2>
            <img src={riderImg} alt='Rider'></img>
            <p>De acordo com o Adoro Cinema, o nome originalmente pensado para o par romântico de Rapunzel era Bastian. No entanto, ao final, Flynn Rider foi o escolhido em referência ao ator Errol Flynn, quem ficou reconhecido mundialmente por interpretar um ladrão simpático em As Aventuras de Robin Hood (1938).</p>
            <h2>Trilha sonora</h2>
            <img src={musicaImg} alt='Música'></img>
            <p>Responsável pela trilha sonora do filme, o compositor Alan Menken baseou as músicas da animação no rock produzido nos anos 1960. A faixa, “I See The Light,” chegou a ser indicada ao Oscar em Melhor Canção Original, como lembra o Adoro Cinema.</p>
        </div>
    )
}

export default Curiosidades