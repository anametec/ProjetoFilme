import solImg from '../img/sol.jpg';

function Home(){
    return(
        <div>
            <h1>Enrolados</h1> <br/>
            <p>Seja bem vindo ao mundo de Enrolados</p> <br/>
            <img src={solImg} alt='Sol'></img>
        </div>
    )
}

export default Home