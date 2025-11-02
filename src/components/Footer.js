import { NavLink } from "react-router-dom";

import Github from "../assets/icons/github-grey.png";
import Twitter from "../assets/icons/twitter-grey.png";
import Linkedin from "../assets/icons/linkedin-grey.png";

const Footer = () =>{
    return(
        <div className="bg-dark p-3"> 
            <div className="text-light">
                <h4 className="mb-3">John Doe</h4>
                <p className="mb-0">rue Laure Diebold</p>
                <p className="mb-0">69009 Lon, France</p>
                <p className="mb-0">10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
                <img src={Github} alt="icône github"></img>
                <img src={Twitter} alt="icône twitter" className="mx-2"></img>
                <img src={Linkedin} alt="icône linkedin"></img>
            </div>

            <div className="text-light">
                <h4 className="mb-3">Liens utiles</h4>
                <p className="mb-0"><NavLink to="/" className="text-light text-decoration-none">Accueil</NavLink></p>
                <p className="mb-0"><NavLink to="/servives" className="text-light text-decoration-none">Services</NavLink></p>
                <p className="mb-0"><NavLink to="/portofolio" className="text-light text-decoration-none">Portofolio</NavLink></p>
                <p className="mb-0"><NavLink to="/contact" className="text-light text-decoration-none">Me contacter</NavLink></p>
                <p className="mb-0"><NavLink to="/mentionslegales" className="text-light text-decoration-none">Mentions légales</NavLink></p>
            </div>
        </div>
    )
        
}

export default Footer;