
import Footer from "../components/Footer";
import Skillbar from "../components/Skillbar";
import Portrait from "../components/Portrait";
import Johnmodal from "../components/Johnmodal";

const Home = () =>{
    return(
        <div>
            <header className="hero">
                <div className="container">
                    <div className="text-light text-center z-1">
                        <h1 className="hero__title fw-bold">Bonjour, je suis John Doe</h1>
                        <h2 className="fw-bold">Développeur web full stack</h2>
                        <button type="button" className="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            En savoir plus
                        </button>
                    </div>
                </div>
        
                <Johnmodal />
            </header>
            
            <section className="container mb-4 mt-4 shadow-lg">
                <div className="row">
                    <Portrait />
                    
                    <Skillbar />
                </div>
            </section>

            <Footer />
        </div>
    )
        
}

export default Home;