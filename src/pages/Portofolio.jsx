import Freshfood from "../components/Freshfood";
import Akira from "../components/Akira";
import Zen from "../components/Zen";
import Strategy from "../components/Strategy";
import Creation from "../components/Creation";
import Maquette from "../components/Maquette";

import Footer from "../components/Footer";

const Portofolio = () =>{
    return(
        <div>
            <header>
                <div className="banner"></div>

                <div className="container text-center mt-4 w-75 border-bottom border-primary border-4 fw-semibold">
                    <h1 className="fs-bold">Portofolio</h1>
                    <p>Voici quelques-unes de mes réalistaions</p>
                </div>
            </header>

            <section className="container mt-4 mb-4">
                <div className="portofolio-grid d-flex flex-wrap justify-content-center">
                    <div className="row mb-3">
                        <Freshfood />
                        <Akira />
                        <Zen />
                    </div>
                
                    <div className="row mb-3">
                        <Strategy />
                        <Creation />
                        <Maquette />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
        
}

export default Portofolio;