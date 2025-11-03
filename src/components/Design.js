import Burste from "../assets/icons/burste.png";

const Design = () =>{
    return(
        <div className="card h-100 align-items-center col-md-4 card-survol" style={{width: '25em'}}>
            <img src={Burste} className="card-img-top w-25 m-3" alt="icône"/>
            <div className="card-body text-center">
                <h5 className="card-title fw-bold">L'UX Design</h5>
                <p className="card-text text-fluid">
                    L'UX design est une discipline qui consiste à concevoir des produits 
                    (sites web, applications mobiles, logiciels, objects connectés, etc.)
                    en plaçant l'utilisateur au centre des préoccupations. L'objectif est 
                    de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </p>
            </div>
        </div>
    );
}
export default Design; 