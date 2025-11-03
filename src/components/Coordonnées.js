import Plan from "../assets/icons/plan-dark.png";
import Geo from "../assets/icons/geoloc-dark.png";
import Phone from "../assets/icons/iphone.png";
import Fenetre from "../assets/icons/adresse-dark.png";

const Coordonnées = () =>{
    return(
        <div className="col-md-6 mb-4">
            <h2 className="border-bottom border-primary border-4 fw-bold mb-4 p-2">Mes coordonnées</h2>
            <address>
                <p>John Doe</p>
                <p className="mb-0">
                    <img src={Plan} alt="icône"></img>
                    <span>40 rue Laure Diebold</span>
                </p>
                <p className="mb-0">
                    <img src={Geo} alt="icône"></img>
                    <span>69009 Lyon, France</span>
                </p>
                <p className="mb-0">
                    <img src={Phone} alt="icône"></img>
                    <span>10 20 30 40 50</span>
                </p>
                <p>
                    <img src={Fenetre} alt="icône"></img>
                    <span>john.doe@gmail.com</span>
                </p>
                <p className="embed.responsive embed.responsive-16by9">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754069!2d4.796403976139263!3d45.778665712402216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1762005010475!5m2!1sfr!2sfr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="carte" classNamesName="ratio ratio-16*9"></iframe>  
                </p>
            </address>
        </div>
        
       
    )
}

export default Coordonnées;