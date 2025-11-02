import Footer from "../components/Footer";

const Home = () =>{
    return(
        <div>
            <header className="hero">
                <div className="container">
                    <div className="text-light z-1 text-center">
                        <h1 className="hero__title">Bonjour, je suis John Doe</h1>
                        <h2>Développeur web full stack</h2>
                        <button type="button" class="btn btn-danger">En savoir plus</button>
                    </div>
                </div>
                
            </header>
            
            <Footer />
        </div>
    )
        
}

export default Home;