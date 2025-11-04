import { NavLink } from "react-router-dom";

import Github from "../assets/icons/github-grey.png";
import Twitter from "../assets/icons/twitter-grey.png";
import Linkedin from "../assets/icons/linkedin-grey.png";

const Footer = () =>{
    {/*blocage des liens twitter et linkedin*/}
    const handleClick = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="row bg-dark p-3"> 
            <div className="text-light mb-4 col-md-4">
                <h5 className="mb-2">John Doe</h5>
                <p className="mb-0">40 rue Laure Diebold</p>
                <p className="mb-0">69009 Lyon, France</p>
                <p className="mb-0">10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>

                <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="icône github" className="socialnetwork"></img>
                </a>
                <a href="https://x.com/"
                onClick={handleClick}
                target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="icône twitter" className="mx-2 socialnetwork"></img>
                </a>
                <a href="https://www.linkedin.com/"
                onClick={handleClick}
                target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="icône linkedin" className="socialnetwork"></img>
                </a>
            </div>

            <div className="text-light mb-4 col-md-4">
                <h5 className="mb-2">Liens utiles</h5>
                <p className="mb-0"><NavLink to="/" className="text-light text-decoration-none">Accueil</NavLink></p>
                <p className="mb-0"><NavLink to="/servives" className="text-light text-decoration-none">Services</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Portofolio</NavLink></p>
                <p className="mb-0"><NavLink to="/contact" className="text-light text-decoration-none">Me contacter</NavLink></p>
                <p className="mb-0"><NavLink to="/mentionslegales" className="text-light text-decoration-none">Mentions légales</NavLink></p>
            </div>

            <div className="text-light mb-4 col-md-4">
                <h5 className="mb-2">Mes dernières réalisations</h5>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Fresh Food</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Restaurant Akira</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Espace bien-être</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">SEO</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Création d'une API</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Maquette d'un site</NavLink></p>
            </div>
        </div>
    );
        
}

export default Footer;