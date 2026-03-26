import './index.css'
import rapunzelImg from '../img/rapunzel.jpg';
import flynnImg from '../img/flynn.jpg';
import gothelImg from '../img/gothel.jpg';

function Personagens() {
    return (
        <div className="personagens">
            <h1>Página dos Personagens</h1> <br />
            <p className="personagens-description">Essa é a página de personagens do filme Enrolados.</p> <br />
            <img src={rapunzelImg} alt='Rapunzel'></img>
            <h2>Rapunzel</h2> <br/>
            <p className="personagens-description">Nome: Rapunzel</p>
            <p className="personagens-description">Idade: 18 anos</p>
            <p className="personagens-description">Personalidade: Curiosa, corajosa e determinada</p>
            <p className="personagens-description">Aparência: Jovem de 18 anos com grandes olhos verdes e sardas. Sua característica mais marcante são os 21 metros de cabelo loiro, que brilham ao cantar.</p>

            <h2>Flynn Rider</h2> <br/>
            <img src={flynnImg} alt='Flynn Rider'></img>
            <p className="personagens-description">Nome: Flynn Rider (Eugene Fitzherbert)</p>
            <p className="personagens-description">Idade: 26 anos</p>
            <p className="personagens-description">Personalidade: Charmoso, audacioso, leal e aventureiro</p>
            <p className="personagens-description">Aparência: Rapaz moreno, com olhos castanhos e um sorriso malandro, veste colete azul e calças marrom.</p>

            <h2>Mãe Gothel</h2> <br/>
            <img src={gothelImg} alt='Mãe Gothel'></img>
            <p className="personagens-description">Nome: Mãe Gothel</p>
            <p className="personagens-description">Idade: Aparentemente 40 anos (na verdade mais de 400 anos)</p>
            <p className="personagens-description">Personalidade: Manipuladora, egoísta e cruel</p>
            <p className="personagens-description">Aparência: Mulher de cabelos castanhos escuros, olhos verdes, veste capa preta e usa um capuz.</p>
        </div>
    )
}

export default Personagens