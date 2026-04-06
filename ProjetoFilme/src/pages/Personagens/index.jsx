import './index.css'
import rapunzelImg from '../img/rapunzel.jpg';
import flynnImg from '../img/flynn.jpg';
import gothelImg from '../img/gothel.jpg';
import pascalImg from '../img/pascal.jpg'; // fazer o import da imagem do Pascal

function Personagens() {
    return (
        <div className="personagens">
            <p className="home-subtitle">Conheça os personagens de Enrolados</p>

            <div className="personagens-container">

                <div className="card">
                    <img src={rapunzelImg} alt="Rapunzel" />
                    <h2>Rapunzel</h2>

                    <p><strong>Idade:</strong> 18 anos</p>
                    <p><strong>Personalidade:</strong> Curiosa, corajosa e determinada</p>
                    <p><strong>Habilidade:</strong> Cabelo mágico com poder de cura</p>
                    <p><strong>Sonho:</strong> Ver as lanternas flutuantes</p>
                    <p><strong>Dubladora:</strong> Mandy Moore</p>

                    <p className="descricao">
                        Rapunzel é uma princesa que viveu presa em uma torre durante toda a sua vida.
                        Ao conhecer Flynn Rider, ela embarca em uma aventura para descobrir o mundo
                        e a verdade sobre sua origem.
                    </p>
                </div>

                <div className="card">
                    <img src={flynnImg} alt="Flynn Rider" />
                    <h2>Flynn Rider</h2>

                    <p><strong>Nome verdadeiro:</strong> Eugene Fitzherbert</p>
                    <p><strong>Idade:</strong> 26 anos</p>
                    <p><strong>Personalidade:</strong> Charmoso, sarcástico e aventureiro</p>
                    <p><strong>Habilidade:</strong> Inteligência, agilidade e combate</p>
                    <p><strong>Passado:</strong> Ladrão procurado pelo reino</p>

                    <p className="descricao">
                        Flynn Rider é um ladrão procurado que acaba cruzando o caminho de Rapunzel.
                        No início, ele é egoísta e só pensa em si mesmo, mas ao longo da jornada
                        mostra seu verdadeiro coração e se torna alguém leal e corajoso.
                    </p>
                </div>

                <div className="card">
                    <img src={gothelImg} alt="Mãe Gothel" />
                    <h2>Mãe Gothel</h2>

                    <p><strong>Idade:</strong> Mais de 400 anos</p>
                    <p><strong>Personalidade:</strong> Manipuladora, egoísta e controladora</p>
                    <p><strong>Motivação:</strong> Manter sua juventude eterna</p>
                    <p><strong>Habilidade:</strong> Manipulação emocional</p>
                    <p><strong>Relação:</strong> Finge ser mãe de Rapunzel</p>

                    <p className="descricao">
                        Mãe Gothel sequestrou Rapunzel ainda bebê para usar o poder mágico de seu cabelo.
                        Ela mantém a garota presa na torre, manipulando seus sentimentos para que nunca
                        descubra a verdade sobre sua origem.
                    </p>
                </div>

                <div className="card">
                    <img src={pascalImg} alt="Pascal" />
                    <h2>Pascal</h2>

                    <p><strong>Espécie:</strong> Camaleão</p>
                    <p><strong>Personalidade:</strong> Leal, divertido e protetor</p>
                    <p><strong>Habilidade:</strong> Camuflagem (muda de cor)</p>
                    <p><strong>Função:</strong> Companheiro de Rapunzel</p>
                    <p><strong>Destaque:</strong> Expressa emoções sem falar</p>

                    <p className="descricao">
                        Pascal é o melhor amigo de Rapunzel e está sempre ao seu lado.
                        Mesmo sendo pequeno, ele é extremamente corajoso e muitas vezes
                        ajuda a proteger Rapunzel durante suas aventuras.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Personagens