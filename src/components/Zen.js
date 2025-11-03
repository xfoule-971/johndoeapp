import Space from "../assets/images/portfolio/espace-bien-etre.jpg";

const Zen = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4 card-survol" style={{width: '18rem'}}>
            <img src={Space} className="card-img-top" alt="bouddha"/>
            <div class="card-body">

                <h5 class="card-title fw-bold">Espace bien-être</h5>

                <p class="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <button class="btn btn-primary hover-shadow-lg">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                Site réalisé avec LARAVEL
            </div>
        </div>
    );
}
export default Zen;