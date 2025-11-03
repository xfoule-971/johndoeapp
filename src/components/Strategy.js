import Design from "../assets/images/portfolio/seo.jpg";

const Strategy = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Design} className="card-img-top" alt="kaleïdoscope de mots"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">SEO</h5>

                <p className="card-text">
                    Amélioration du référencement d'un site e-commerce
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>Utilisation des outils SEO</small>
                </div>
            </div>
        </div>
    );
}
export default Strategy;