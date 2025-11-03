import Working from "../assets/images/portfolio/screens.jpg";

const Maquette = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Working} className="card-img-top" alt="outils du développeur"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">Maquette d'un site web</h5>

                <p className="card-text">
                    Création du prototype d'un site
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>Réalisé avec FIGMA</small>
                </div>
            </div>
        </div>
    );
}
export default Maquette;