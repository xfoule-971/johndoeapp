import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <h3 class="navbar-brand" href="#">John Doe</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portofolio">Portofolio</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/mentionslegales">Mentions légales</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
        
}

export default Navigation;