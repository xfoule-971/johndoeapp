import Space from "../assets/images/portfolio/espace-bien-etre.jpg";

const Zen = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Space} className="card-img-top" alt="bouddha"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">Espace bien-être</h5>

                <p className="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>Site réalisé avec LARAVEL</small>
                </div>
            </div>
        </div>
    );
}
export default Zen;