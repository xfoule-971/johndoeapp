import Food from "../assets/images/portfolio/fresh-food.jpg";

const Freshfood = () =>{
    return(
        <div className="card text-center p-0 mx-3" style={{width: '18rem'}}>
            <img src={Food} className="card-img-top" alt="vegetables"/>
            <div className="card-body">
                <h5 className="card-title fs-bold">Fresh Food</h5>

                <p className="card-text">
                    Site de vente de produits frais en ligne
                </p>

                <a href="#" class="btn btn-primary">Voir le site</a>

                <div className="card-footer">
                    <small>Site réalisé avec PHP et MySQL</small>
                </div>
            </div>
        </div>
    );
}
export default Freshfood;