import Restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";

const Akira = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Restaurant} className="card-img-top" alt="sushis"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">Restaurant Akira</h5>

                <p className="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>Site réalisé avec Wordpress</small>
                </div>
            </div>
        </div>
    );
}
export default Akira;