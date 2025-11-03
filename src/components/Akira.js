import Restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";

const Akira = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4" style={{width: '18rem'}}>
            <img src={Restaurant} className="card-img-top" alt="sushis"/>
            <div class="card-body">

                <h5 class="card-title">Restaurant Akira</h5>

                <p class="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <button class="btn btn-primary">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                Site réalisé avec WordPress
            </div>
        </div>
    );
}
export default Akira;