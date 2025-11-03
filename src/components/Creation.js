import Ecran from "../assets/images/portfolio/coder.jpg";

const Creation = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4 card-survol" style={{width: '18rem'}}>
            <img src={Ecran} className="card-img-top" alt="codage sur écran"/>
            <div class="card-body">

                <h5 class="card-title">Création d'une API</h5>

                <p class="card-text">
                    Création d'une API RESTFULL publique
                </p>

                <button class="btn btn-primary hover-shadow-lg">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                PHP - SYMFONY
            </div>
        </div>
    );
}
export default Creation;