import Scrolling from "../components/Scrolling";

import Footer from "../components/Footer";

const Mentionslegales = () =>{
    return(
        <div>
            <header>
                <div className="banner"></div>

                <div className="container text-center mt-4 w-75 border-bottom border-primary border-4 fw-semibold">
                    <h1 className="fw-bold">Mentions légales</h1>
                </div>
            </header>

            <section className="container mt-5 mb-5">
                 <Scrolling />
            </section>
           
            <Footer />   
        </div>
    )
        
}

export default Mentionslegales;