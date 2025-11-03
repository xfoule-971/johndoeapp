import Akira from "../components/Akira";
import Footer from "../components/Footer";
import Freshfood from "../components/Freshfood";
import Strategy from "../components/Strategy";
import Creation from "../components/Creation";
import Maquette from "../components/Maquette";

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

            <section className="container">
                <div className="row">
                    <Freshfood />
                    <Akira />
                    <Zen />
                    <Strategy />
                    <Creation />
                    <Maquette />
                </div>
            </section>

            <Footer />
        </div>
    )
        
}

export default Portofolio;