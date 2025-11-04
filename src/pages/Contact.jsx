import Coordonnées from "../components/Coordonnées";
import Formulaire from "../components/Formulaire";

import Footer from "../components/Footer";

const Contact = () =>{
    return(
        <div>
            <header>
                <div className="banner"></div>

                <div className="container text-center mt-4 w-75 border-bottom border-primary border-4 fw-semibold">
                    <h1 className="fw-bold">Contact</h1>
                    <p>
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, 
                        mercide remplir le formule de contact.
                    </p>
                </div>
            </header>

            <section className="container mt-5 mb-5 shadow-lg p-3">
                <div className="row">
                    <Formulaire />
                    <Coordonnées />
                </div>
            </section>

            <Footer />
        </div>
    )
        
}

export default Contact;