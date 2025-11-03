import { NavLink } from "react-router-dom";

const Navigation = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 fixed-top">
            <div class="container-fluid">
                <NavLink to="/" className="navbar-brand text-uppercase">John doe</NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div clasNclassNames="collapse navbar-collapse" id="navbarTogglerDemo02">
                
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase text-light">

                        {/*Mise en place du lien actif isActive sur mes liens*/}
                        <li>
                            <NavLink to="/" 
                            style={({isActive}) =>({
                                fontWeight: isActive? 'bold' : 'normal',
                                borderBottom: isActive? '2px solid #fff': 'none',
                            })}
                            className="text-light text-decoration-none mx-3">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services"
                            style={({isActive}) =>({
                                fontWeight: isActive? 'bold' : 'normal',
                                borderBottom: isActive? '2px solid #fff': 'none',
                            })}
                            className="text-light text-decoration-none mx-3">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portofolio"
                             style={({isActive}) =>({
                                fontWeight: isActive? 'bold' : 'normal',
                                borderBottom: isActive? '2px solid #fff': 'none',
                            })}
                            className="text-light text-decoration-none mx-3">Portofolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                             style={({isActive}) =>({
                                fontWeight: isActive? 'bold' : 'normal',
                                borderBottom: isActive? '2px solid #fff': 'none',
                            })}
                            className="text-light text-decoration-none mx-3">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mentionslegales"
                             style={({isActive}) =>({
                                fontWeight: isActive? 'bold' : 'normal',
                                borderBottom: isActive? '2px solid #fff': 'none',
                            })}
                            className="text-light text-decoration-none mx-3">Mentions légales</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );      
}

export default Navigation;