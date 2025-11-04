import Design from "../components/Design";
import Devweb from "../components/Devweb";
import Referencement from "../components/Referencement";
import Footer from "../components/Footer";

const Services = () =>{
    return(
        <div>
            <header>
                <div className="banner"></div>

                <div className="container text-center mt-4 w-75 border-bottom border-primary border-4 fw-semibold">
                    <h1 className="fs-1">Mon offre de services</h1>
                    <p>Voici les prestations sur lesquelles je peux intervenir</p>
                </div>
            </header>
           
           <section className="container mt-4 mb-4">
                <div className="row d-flex flex-wrap justify-content-center">
                   
                        <Design />

                        <Devweb />

                        <Referencement />
                  
                </div>
                
           </section>
            
            <Footer />
        </div>
    );
        
}

export default Services;