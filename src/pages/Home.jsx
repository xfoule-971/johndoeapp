import Johnabout from "../assets/images/john-doe-about.jpg";

import Footer from "../components/Footer";

const Home = () =>{
    return(
        <div>
            <header className="hero">
                <div className="container">
                    <div className="text-light text-center z-1">
                        <h1 className="hero__title">Bonjour, je suis John Doe</h1>
                        <h2>Développeur web full stack</h2>
                        <button type="button" class="btn btn-danger">En savoir plus</button>
                    </div>
                </div>
                
            </header>
            
            <section>
                <div>
                    <h3>A propos</h3>
                    <img src={Johnabout} alt="portait de john"></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                        Vestibulum id tristique libero. Vivamus in eleifend urna.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                        Vestibulum id tristique libero. Vivamus in eleifend urna.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed tempus, ipsum non posuere convallis, lacus magna tempus enim, et varius ligula erat et erat. 
                        Vestibulum id tristique libero. Vivamus in eleifend urna.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
        
}

export default Home;