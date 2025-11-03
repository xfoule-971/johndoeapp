import Ecran from "../assets/images/portfolio/coder.jpg";

const Creation = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Ecran} className="card-img-top" alt="codage sur écran"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">Création d'une API</h5>

                <p className="card-text">
                    Création d'une API RESTFULL publique
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>PHP - SYMFONY</small>
                </div>
            </div>
        </div>
    );
}
export default Creation;