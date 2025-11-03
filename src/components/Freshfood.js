import Food from "../assets/images/portfolio/fresh-food.jpg";

const Freshfood = () =>{
    return(
        <div className="card text-center p-0 mx-3 mb-3 col-md-4" style={{width: '18rem'}}>
            <img src={Food} className="card-img-top" alt="vegetables"/>
            
            <div class="card-body">

                <h5 class="card-title">Fresh Food</h5>

                <p class="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <button class="btn btn-primary">Voir le site</button>
            </div>

            <div class="card-footer text-muted">
                Site réalisé avec PHP et MySQL
            </div>
        </div>
        
    );
}
export default Freshfood;