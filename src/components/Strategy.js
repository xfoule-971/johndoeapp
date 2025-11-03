import Design from "../assets/images/portfolio/seo.jpg";

const Strategy = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4 card-survol" style={{width: '18rem'}}>
            <img src={Design} className="card-img-top" alt="kaleïdoscope de mots"/>
            <div class="card-body">

                <h5 class="card-title">SEO</h5>

                <p class="card-text">
                    Amélioration du référencement d'un site e-commerce
                </p>

                <button class="btn btn-primary hover-shadow-lg">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                utlisation des outils SEO
            </div>
        </div>
    );
}
export default Strategy;