import Working from "../assets/images/portfolio/screens.jpg";

const Maquette = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4" style={{width: '18rem'}}>
            <img src={Working} className="card-img-top" alt="outils du développeur"/>
            <div class="card-body">

                <h5 class="card-title">Maquette d'un site web</h5>

                <p class="card-text">
                    Création du prototype d'un site
                </p>

                <button class="btn btn-primary">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                Réalisé avec FIGMA 
            </div>
        </div>
    );
}
export default Maquette;