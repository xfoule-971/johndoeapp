import Plan from "../assets/icons/plan-dark.png";
import Geo from "../assets/icons/geoloc-dark.png";
import Phone from "../assets/icons/iphone.png";
import Fenetre from "../assets/icons/adresse-dark.png";

import World from "../assets/icons/world.png";

const Scrolling = () =>{
    return(
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        
                        <h3>John Doe</h3>
                        <p className="mb-0">
                            <img src={Plan} alt="icône"></img>
                            <span className="mx-2">40 rue Laure Diebold</span>
                        </p>
                        <p className="mb-0">
                            <img src={Geo} alt="icône"></img>
                            <span className="mx-2">69009 Lyon, France</span>
                        </p>
                        <p className="mb-0">
                            <img src={Phone} alt="icône"></img>
                            <span className="mx-2">10 20 30 40 50</span>
                        </p>
                        <p>
                            <img src={Fenetre} alt="icône"></img>
                            <span className="mx-2">john.doe@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                        <h3 className="fw-bold">alwaysdata</h3>
                        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                        <p>
                            <img src={World} alt="icône"></img>
                            <span className="mx-2">
                                <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noopener noreferrer">
                                    www.alwaysdata.com
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                        <h3 className="fw-bold">Crédits</h3>
                        <p>
                            Ce site a été réalisé par John Doe, étudiant 
                            au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.
                        </p>
                        <p>
                            Les images utilisées sur ce site sont libres de droits et ont été obtenues
                            sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a>.
                        </p>
                        <p>
                            La favicon de ce site a été fournie 
                            par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Scrolling;