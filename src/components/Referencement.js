import Lupe from "../assets/icons/lupe.png";

const Referencement = () =>{
    return(
        <div className="card p-2 align-items-center w-25 h-100 col-md-4 card-survol" style={{width: '18rem'}}>
            <img src={Lupe} className="card-img-top w-25 m-3" alt="icône"/>
            <div class="card-body text-center">
                <h5 className="card-title fw-bold">Référencement</h5>
                <p className="card-text text-fluid">
                    Le référencement naturel (SEO) est une technique qui consiste
                    à optimiser un site web pour le faire remonter dans les résultats
                    des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
                    est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
            </div>
        </div>
    );
}
export default Referencement; 