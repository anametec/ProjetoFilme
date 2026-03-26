import './index.css';
import trailerVideo from '../video/TANGLED_Original_Movie_Trailer_Official_Disney_UK_1080P.mp4';

function Home(){
    return(
        <div className="home">
            <video
                src={trailerVideo}
                controls
                autoPlay
                muted
                loop
                style={{ width: '100%', maxWidth: '720px', borderRadius: '12px', margin: '1rem 0' }}
            ></video>
            <p>Bem-vindo à página do filme Enrolados!</p>
        </div>
    )
}

export default Home